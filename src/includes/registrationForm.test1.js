import { render, screen } from '@testing-library/react';
import React from 'react';
import { mount,shallow} from 'enzyme';
import RegistrationForm from './registrationForm';
import '@testing-library/jest-dom'
describe('Registration Page Snapshot', () => {

    let mountWrapper;
    beforeEach(() => {
        mountWrapper = mount(<RegistrationForm />);

    });
});


describe("Should have few fields Page",()=>{

    test('should have FirstName field',()=>{
        render(<RegistrationForm />);
        const firstName=screen.getByText("First Name");
        expect(firstName).toBeInTheDocument;
    })
    test('should have Mobile Number field',()=>{
        render(<RegistrationForm />);
        const Mobile=screen.getByText("Mobile Number");
        expect(Mobile).toBeInTheDocument;
    })
    test('should have Location field',()=>{
        render(<RegistrationForm />);
        const Location=screen.getByText("Location");
        expect(Location.innerHtml).toBeInTheDocument;
    })
    
})
describe("Should inputs mail and password",()=>{

    test('should have email field',()=>{
        render(<RegistrationForm />);
        const email=screen.getByText("Email");
        expect(email).toBeInTheDocument;
    })
    test('should have Password field',()=>{
        render(<RegistrationForm />);
        const password=screen.getByText("Password");
        expect(password).toBeInTheDocument;
    })
    
})