import axios from "axios";

const accessKey: string = '9e66aaa8-8293-4f02-ae04-e006f4ef8c4e';

/**
    * A function that is triggered when the contact form is filled out and the submit button is pressed.
    * @returns `object` - This returns an object with a key of `success` and a boolean value.
*/
export const SubmitForm = async (eventTarget: any) => {
    const formData = new FormData(eventTarget);
    formData.append('access_key', accessKey);
    formData.append('from_name', 'Arizola Contact Form');

    // SUBMIT API REQUEST
    const apiResult = await axios.post('https://api.web3forms.com/submit', Object.fromEntries(formData), {
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        }
    });

    // RETURN DEFAULT CALLBACK
    return { 'success': (apiResult && typeof apiResult === 'object' && apiResult.status === 200) ? true : false };
}
