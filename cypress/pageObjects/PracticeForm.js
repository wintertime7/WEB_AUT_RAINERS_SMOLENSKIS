import BasePage from "./BasePage";

class PracticeForm extends BasePage {
  static get url() {
    return "/automation-practice-form";
  }

  //First name field input
  static get firstNameField() {
    return cy.get("#firstName");
  }

  //Last name input field
  static get lastNameField() {
    return cy.get("#lastName");
  }

  //Last name input field
  static get emailField() {
    return cy.get("#userEmail");
  }

  //Gender checkboxes
  static get genderCheckbox() {
    return cy.get(".custom-control-label");
  }

  //Phone number input
  static get phoneNumber() {
    return cy.get("#userNumber");
  }

  //Calendar date click
  static get calendarInput() {
    return cy.get("#dateOfBirthInput");
  }

  //Calendar month select
  static get calendarMonth() {
    return cy.get(".react-datepicker__month-select");
  }

  //Calendar year select
  static get calendarYear() {
    return cy.get(".react-datepicker__year-select");
  }

  //Calendar day select
  static get calendarDay() {
    return cy.get(`[aria-label="Choose Friday, February 28th, 1930"]`);
  }

  //Subjects field
  static get subjectsField() {
    return cy.get("#subjectsContainer");
  }

  //Hobbies field
  static get hobbiesField() {
    return cy.get(".custom-control-label");
  }

  //File upload
  static get fileUpload() {
    return cy.get("input[type=file]");
  }

  //Current address input
  static get currentAddress() {
    return cy.get("#currentAddress");
  }

  //State input
  static get stateField() {
    return cy.get("#state");
  }

  //City input
  static get cityField() {
    return cy.get("#city");
  }

  //Submit button
  static get submitButton() {
    return cy.get("#submit");
  }

  //Table with data
  static get dataTable() {
    return cy.get(".table-responsive");
  }
}

export default PracticeForm;
