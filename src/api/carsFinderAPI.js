import axios from 'axios'

export const getCar = async (searchtext) => getCarAxios(searchtext)

export const getCarAxios = async (searchtext) => {
    const response = await axios.get(`https://api.tmsandbox.co.nz/v1/Search/Property/Residential.json?bathrooms_min=${searchtext}`, {
        headers: {
            Authorization: `OAuth oauth_consumer_key=DF327510C40E41796925F1815F663954, oauth_signature_method=PLAINTEXT, oauth_signature=AFC17EBB8166A8F6A1DC66DBE7B2E342%26`
        }
    })
    console.log(response.data)
    return await response.data;
}