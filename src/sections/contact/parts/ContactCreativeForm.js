import React from 'react'
import styled, { keyframes } from 'styled-components'
import emailjs from 'emailjs-com'

class ContactThreeForm extends React.Component {
      constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            phone: "",
            menssagem: "",
            error: false
        }
    }

    formSubmit() {
      if (this.state.name === "" || this.state.email === "" || this.state.message === "") {
          this.setState({error: true})
      } else {
          this.setState({error: false})
      }
      this.forceUpdate()
    }

    
    check(val) {
        if (this.state.error && val === "") {
            return false
        } else {
            return true
        }
    }

    shouldComponentUpdate(nextProps, nextState) { 
      return false;
    }

    render() {

        const Separator = styled.div`
            height: 5px;
            width: 50px;
            background-color: #04e5e5;
            margin-bottom: 30px;
            margin-left: 6px;
        `

        const ContactForm = styled.div`
            padding: 40px;
            width: 100%;
            position: relative;
            z-index: 5;

            .butt{
              display: block;
              height: 50px;
              width: 186px;
              position: relative;
              border: none;
              overflow: hidden;
              transition: .5s;
              background-color: #000;
              font-family: Poppins;
              font-size: 18px;
              color: white;
              &:hover {
                background: #444;
                color: #04e5e5;
              }
            }
        `

        const Heading = styled.h2`
            font-size: 70px;
            font-family: Teko;
            color: #fff;
        `

        const InputElement = styled.div`
            margin: 20px 0;
        `

        const ErrorInputAnimation = keyframes`
            0% {
              border-bottom: 1px solid #111;
            }
            100% {
              border-bottom: 1px solid #ff0000;
            }
        `
        

        const Input = styled.input`
            width: 100%;
            background-color: #111;
            border: none;
            border-bottom: 1px solid #444;
            padding: 10px 5px;
            border-radius: 0;
            color: #fff;
            transition: .5s;
            &:focus {
              border-bottom: 1px solid #04e5e5;
              outline: none;
            }
            &.error {
              animation: ${ErrorInputAnimation} 1s forwards;
            }
        `

        const Textarea = styled.textarea`
            width: 100%;
            background-color: #111;
            border: none;
            border-bottom: 1px solid #444;
            padding: 10px 5px;
            border-radius: 0;
            color: rgb(255, 255, 255);
            transition: all 0.5s ease 0s;
            min-height: 100px;
            margin-top: 0px;
            margin-bottom: 0px;
            height: 100px;
            &:focus {
              border-bottom: 1px solid #04e5e5;
              outline: none;
            }
        `

        const Submit = styled.button`
            display: block;
            height: 50px;
            width: 186px;
            position: relative;
            border: none;
            overflow: hidden;
            transition: .5s;
            background-color: #000;
            .butt{
              background: transparent;
              border: none;
              color: white;
              font-family: Poppins;
              font-size: 20px;
            }
            &:hover {
              background: #444;
              text-color: #04e5e5;
            }
            span {
              position: relative;
              top: 0;
              color: #fff;
              z-index: 10;
              text-transform: uppercase;
              letter-spacing: 2px;
            }
        `
        function sendMail(e){
          e.preventDefault();
          
          emailjs.sendForm(
          'service_1x6yttm',
          'template_mq1a81o',
          e.target,
          'gF3FhzRhhm0c4PqF2'
          ).then(res=>{
            console.log(res);
          }).catch(err=> console.log(err));
          e.target.reset()
        }


        return(
          <ContactForm>
              <Heading>
                Entre em contato
              </Heading>
              <Separator />
              <form
              onSubmit={sendMail}
              >
              <InputElement>
                <Input type='text' name='user_name' placeholder='Nome' required/>
              </InputElement>
              <InputElement>
                <Input type='email' name='user_email' placeholder='Email' required/> 
              </InputElement>
              <InputElement>
                <Input type='text' name='user_phone' placeholder='Whatsapp' required/>
              </InputElement>
              <InputElement>
                <Textarea name='user_message' placeholder='Mensagem' required/>
              </InputElement> 
              <button className='butt' type='submit'>ENVIAR</button>
              </form>
          </ContactForm>
        )
    }

}

export default ContactThreeForm