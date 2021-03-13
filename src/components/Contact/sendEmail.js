import emailjs from 'emailjs-com';


export default function sendEmail(e) {

   
    return emailjs.sendForm('service_7bzr1bp', 'template_v2uwhrp', e.target,  'user_jBHGH1YMaidwVPHhS30WC')

 
}