import React, { useState } from "react";
import {
    MDBNavbar,
    MDBContainer,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBCollapse
} from 'mdb-react-ui-kit';

const Navigation = () => {

    const [showNavColorThird, setShowNavColorThird] = useState(false);
    return (<>
        <MDBNavbar expand='lg' light style={{ backgroundColor: '#e3f2fd' }}>
            <MDBContainer fluid>
                <MDBNavbarBrand href='#'>Codelab _IDE</MDBNavbarBrand>
                <MDBNavbarToggler
                    type='button'
                    data-target='#navbarColor02'
                    aria-controls='navbarColor02'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setShowNavColorThird(!showNavColorThird)}
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>
                {/* <MDBCollapse show={showNavColorThird} navbar>
                    <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
                        <MDBNavbarItem className='active'>
                            <MDBNavbarLink aria-current='page' href='#'>
                                Home
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink href='#'>Features</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink href='#'>Pricing</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink href='#'>About</MDBNavbarLink>
                        </MDBNavbarItem>
                    </MDBNavbarNav>
                </MDBCollapse> */}
            </MDBContainer>
        </MDBNavbar>
    </>)
}

export default Navigation;