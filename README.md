# test-backend-dealls

Instructions:
1. Migrate and seed the database.
    - `npx sequelize-cli db:migrate`
    - `npx sequelize-cli db:seed:all`
2. Run the project.
    - `npm start`

API Usage:
| Method | Address               | Headers                   | Body                                                                                                                              | Description                                  |
|--------|-----------------------|---------------------------|-----------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------|
| POST   | /attendance/submit    | user-id: Employee User ID | type: "Check In" or "Check Out" (number)                                                                                          | For submitting attendance check-in/check-out |
| POST   | /overtime/submit      | user-id: Employee User ID | hours: Amount of overtime hours (number)                                                                                          | For submitting overtime                      |
| POST   | /reimbursement/submit | user-id: Employee User ID | amount: Amount of money to be reimbursed (number)<br> description: Description of reimbursement item (string)                         | For submitting reimbursement                 |
| POST   | /payroll/create       | user-id: Admin User ID    | start: Payroll attendance period start date in YYYY-MM-DD (string)<br> end: Payroll attendance period end date in YYYY-MM-DD (string) | For creating payroll attendance period       |
| POST   | /payroll/process      | user-id: Admin User ID    | payPeriodId: Payroll attendance period ID                                                                                         | For processing payroll                       |
| POST   | /payslip/generate     | user-id: Employee User ID | payPeriodId: Payroll attendance period ID                                                                                         | For generating payslip                       |
| GET    | /payslip/summary      | user-id: Admin User ID    |                                                                                                                                   | For fetching payslip summary                 |
