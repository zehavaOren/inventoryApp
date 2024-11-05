# Inventory App

## Project Description
The Inventory App is a web application that allows users to manage their product inventory. It provides a responsive screen that can be filtered by date and store, and displays the data in a tabular or graphical format (histogram).

## Technologies Used
- Angular TS
- Node.js
- SQL Server

## Features
1. **Responsive Screen**: The application has a user-friendly and responsive interface that can be accessed from various devices.
2. **Filtering**: Users can filter the inventory data by date and store, allowing them to view specific information as needed.
3. **Tabular and Graphical Representation**: The app offers both tabular and graphical (histogram) views of the inventory data, giving users the flexibility to choose the most suitable format for their needs.
4. **SQL Integration**: The application is integrated with a SQL Server database to store and retrieve the inventory data.

## Installation and Setup
1. Clone the repository:
   ```
   git clone https://github.com/zehavaOren/inventoryApp.git
   ```
2. Navigate to the project directory:
   ```
   cd inventoryApp
   ```
3. Install the necessary dependencies:
   ```
   npm install
   ```
4. Set up the SQL Server connection:
   - Create a new database in your SQL Server instance.
   - Update the database connection details in the application's configuration files (e.g., `appsettings.json` for the Node.js backend, and environment variables for the Angular frontend).
5. Build and run the application:
   ```
   npm start
   ```
6. Access the application in your web browser:
   ```
   http://localhost:4200
   ```

## Usage
1. Filter the inventory data by date and store using the provided input fields.
2. Toggle between the tabular and graphical (histogram) views using the corresponding buttons.
3. Interact with the data to view detailed information, such as product quantities, sales, and more.

## Contributing
If you would like to contribute to the Inventory App project, please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make the necessary changes and commit them.
4. Push your changes to your forked repository.
5. Submit a pull request to the main repository.

## Contact
For any questions or issues, please reach out to the project maintainer:
- Name: Zehava Oren
- Email: zehava.oren@example.com

## License
This project is licensed under the [MIT License](LICENSE).
