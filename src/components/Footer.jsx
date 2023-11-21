
import styled from 'styled-components'

function Footer() {
  return (
    <>
    <FooterWrapper className='footer'>
      <SocialMedia>
        <div className='logo'>
        <ion-icon name="logo-facebook"></ion-icon>
        </div>
        <div className='logo'>
        <ion-icon name="logo-pinterest"></ion-icon>
        </div>
        <div className='logo'>
        <ion-icon name="logo-instagram"></ion-icon>
        </div>
        <div className='logo'>
        <ion-icon name="logo-youtube"></ion-icon>
        </div>
        <div className='logo'>
        <ion-icon name="logo-tiktok"></ion-icon>
        </div>
      </SocialMedia>
      <Links>
        <div>
          <p>OM OSS</p>
        </div>
        <div>
          <p>KUNDTJÄNST</p>
        </div>
        <div>
          <p>LEVERANS & RETURER</p>
        </div>
      </Links>
      <CopyRight>
        <p>© 2023 Erica Bäckman</p>
      </CopyRight>
    </FooterWrapper>
    </>
  )
}

export default Footer

const FooterWrapper = styled.div`
height: 230px;
width: 100%;
background-color: #353240;
`
const SocialMedia = styled.div`
color: white;
display: flex;
justify-content: center;
font-size: 1.5rem;
padding-top: 8px;

.logo {
  padding: 3px;
}
`
const Links = styled.div`
display: flex;
flex-direction: column;
color: white;

p {
  padding: 0;
  margin: 0;
  font-size: 0.9rem;
}
`
const CopyRight = styled.div`
color: white;
padding-top: 20px;

p {
  margin: 0;
  padding: 0;
  font-size: 0.8rem;
}
`
