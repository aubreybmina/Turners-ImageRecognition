// <snippet_imports>
const util = require("util");
const fs = require("fs");
const TrainingApi = require("@azure/cognitiveservices-customvision-training");
const PredictionApi = require("@azure/cognitiveservices-customvision-prediction");
const msRest = require("@azure/ms-rest-js");
// </snippet_imports>

/*
Prerequisites:

1. Install the Custom Vision SDK. Run:
npm install @azure/cognitiveservices-customvision-training
npm install @azure/cognitiveservices-customvision-prediction

2. Create an "Images" folder in your working directory.

3. Download the images used by this sample from:
https://github.com/Azure-Samples/cognitive-services-sample-data-files/tree/master/CustomVision/ImageClassification/Images

This sample looks for images in the following paths:
<your working directory>/Images/Hemlock
<your working directory>/Images/Sedan
<your working directory>/Images/Test
*/

// <snippet_creds>
const trainingKey = "3e8c7c12cfc04b62bf4f5d1baf920335";
const trainingEndpoint = "https://australiaeast.api.cognitive.microsoft.com/";
const predictionKey = "3e8c7c12cfc04b62bf4f5d1baf920335";
const predictionResourceId =
  "/subscriptions/2e6bc066-457d-492f-be53-8d060da84dc8/resourceGroups/mission-turners/providers/Microsoft.CognitiveServices/accounts/turners-resource";
const predictionEndpoint = "https://australiaeast.api.cognitive.microsoft.com/";
// </snippet_creds>

// <snippet_vars>
const publishIterationName = "classifyModel";
const setTimeoutPromise = util.promisify(setTimeout);
// </snippet_vars>

// <snippet_auth>
const credentials = new msRest.ApiKeyCredentials({
  inHeader: { "Training-key": trainingKey },
});
const trainer = new TrainingApi.TrainingAPIClient(
  credentials,
  trainingEndpoint
);
const predictor_credentials = new msRest.ApiKeyCredentials({
  inHeader: { "Prediction-key": predictionKey },
});
const predictor = new PredictionApi.PredictionAPIClient(
  predictor_credentials,
  predictionEndpoint
);
// </snippet_auth>

// <snippet_create>
(async () => {
  console.log("Creating project...");
  const sampleProject = await trainer.createProject("Turners Project");
  // </snippet_create>

  // <snippet_tags>
  const hatchbackTag = await trainer.createTag(sampleProject.id, "Hatchback");
  const cherryTag = await trainer.createTag(
    sampleProject.id,
    "Japanese Cherry"
  );
  // </snippet_tags>

  // <snippet_upload>
  const sampleDataRoot = "Images";

  console.log("Adding images...");
  let fileUploadPromises = [];

  const hatchbackDir = `${sampleDataRoot}/Hatchback`;
  const hatchbackFiles = fs.readdirSync(hatchbackDir);
  hatchbackFiles.forEach((file) => {
    fileUploadPromises.push(
      trainer.createImagesFromData(
        sampleProject.id,
        fs.readFileSync(`${hatchbackDir}/${file}`),
        { tagIds: [hatchbackTag.id] }
      )
    );
  });

  const cherryDir = `${sampleDataRoot}/Sedan`;
  const sedanFiles = fs.readdirSync(cherryDir);
  sedanFiles.forEach((file) => {
    fileUploadPromises.push(
      trainer.createImagesFromData(
        sampleProject.id,
        fs.readFileSync(`${cherryDir}/${file}`),
        { tagIds: [cherryTag.id] }
      )
    );
  });

  await Promise.all(fileUploadPromises);
  // </snippet_upload>

  // <snippet_train>
  console.log("Training...");
  let trainingIteration = await trainer.trainProject(sampleProject.id);

  // Wait for training to complete
  console.log("Training started...");
  while (trainingIteration.status == "Training") {
    console.log("Training status: " + trainingIteration.status);
    await setTimeoutPromise(1000, null);
    trainingIteration = await trainer.getIteration(
      sampleProject.id,
      trainingIteration.id
    );
  }
  console.log("Training status: " + trainingIteration.status);
  // </snippet_train>

  // <snippet_publish>
  // Publish the iteration to the end point
  await trainer.publishIteration(
    sampleProject.id,
    trainingIteration.id,
    publishIterationName,
    predictionResourceId
  );
  // </snippet_publish>

  // <snippet_test>
  const testFile = fs.readFileSync(`${sampleDataRoot}/Test/cardummy.jpg`);

  const results = await predictor.classifyImage(
    sampleProject.id,
    publishIterationName,
    testFile
  );

  // Show results
  console.log("Results:");
  results.predictions.forEach((predictedResult) => {
    console.log(
      `\t ${predictedResult.tagName}: ${(
        predictedResult.probability * 100.0
      ).toFixed(2)}%`
    );
  });
  // </snippet_test>

  // <snippet_function_close>
})();
// </snippet_function_close>
