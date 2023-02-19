import React from 'react';

const Footer=(props)=>{
    return(
        <>
        <footer style={props.darkVariables}>
            <ul type='none' className='contacts'>
                <li><strong>Phone no.: +977 9842903170</strong></li>
                <li><strong>E-mail : shusillimbupangdhak@gmail.com</strong></li>
                <li><a href='https://www.linkedin.com/in/shusil-pangdhak-45842b256/'><div className='linkedin'><img src="../src/assets/linkdein.png"/><strong>LinkedIn : Shusil Pangdhak</strong></div></a></li>
            </ul>
            <ul type='none' className='social'>
                <li><a href='https://www.facebook.com/shusillimbu.pangdhak'><div className="logo"><img src="./src/assets/facebook.webp"/><strong>Facebook</strong></div></a></li>
                <li><a href='tel:9842903170'><div className="logo"><img src="./src/assets/WhatsApp.svg.webp"/><strong>+977 9842903170</strong></div></a></li>
                <li><a href='#'><div className="logo"><img src="./src/assets/telegram.webp"/><strong>Telegram</strong></div></a></li>
            </ul>
        </footer>
        </>
    )
};
export default Footer;