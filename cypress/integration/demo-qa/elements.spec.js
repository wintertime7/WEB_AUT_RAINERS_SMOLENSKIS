import PracticeForm from "../../pageObjects/PracticeForm";

context("Elements Page", () => {
  context("Text box scenarios", () => {
    beforeEach(() => {
      PracticeForm.visit();
    });

    it("Filling in Text Boxes", () => {
      cy.fixture("practiceFormData").then((data) => {
        PracticeForm.firstNameField.type(data.firstName);
        PracticeForm.lastNameField.type(data.lastName);
        PracticeForm.emailField.type(data.email);
        PracticeForm.genderCheckbox.contains(data.gender).click();
        PracticeForm.phoneNumber.type(data.phoneNumber);
        PracticeForm.calendarInput.click();
        PracticeForm.calendarMonth.select(data.birthMonth).should("have.value", data.birthMonthValue);
        PracticeForm.calendarYear.select(data.birthYear).should("have.value", data.birthYearValue);
        PracticeForm.calendarDay.click();
        PracticeForm.subjectsField.type(data.subject + "{enter}");
        PracticeForm.hobbiesField.contains(data.hobby).click();
        PracticeForm.fileUpload.selectFile(data.fileLocation);
        PracticeForm.currentAddress.type(data.currentAddress);
        PracticeForm.stateField.type(data.state + "{enter}");
        PracticeForm.cityField.type(data.city + "{enter}");
        PracticeForm.submitButton.click();

        PracticeForm.dataTable.should("contain", data.firstName);
        PracticeForm.dataTable.should("contain", data.lastName);
        PracticeForm.dataTable.should("contain", data.email);
        PracticeForm.dataTable.should("contain", data.gender);
        PracticeForm.dataTable.should("contain", data.phoneNumber);
        PracticeForm.dataTable.should("contain", "28 " + data.birthMonth + "," + data.birthYear);
        PracticeForm.dataTable.should("contain", data.subject);
        PracticeForm.dataTable.should("contain", data.hobby);
        PracticeForm.dataTable.should("contain", data.firstName);
        PracticeForm.dataTable.should("contain", data.fileLocation.split("/")[2]);
        PracticeForm.dataTable.should("contain", data.currentAddress);
        PracticeForm.dataTable.should("contain", data.state);
        PracticeForm.dataTable.should("contain", data.city);
        
      });
    });
  });
});
