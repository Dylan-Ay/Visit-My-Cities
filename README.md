# Visit My Cities

## Welcome! 👋

Thanks for checking out this bachelor's degree project.

<img width="275" height="596" alt="Screenshot_1772996691" src="https://github.com/user-attachments/assets/df4fc462-6e87-4b36-9b15-c234f9990579" />
<img width="275" height="596" alt="Screenshot_1772996707" src="https://github.com/user-attachments/assets/581234a5-5788-4705-a7ae-e3d6fbb3d590" />
<br>
(More screenshots down below)

## The Project

The Visit My Cities project catalogs the various notable buildings in each city. A mobile application allows visitors to plan their visits during their time in a city. Visitors can view buildings based on their preferences (year of construction, architectural style, categories). An expert user has the possibility to add new buildings. Each building has plenty of useful informations to plan a visit.

## License ❗

- The source code is publicly visible for evaluation purposes only and may
  not be reused without explicit prior permission.
  
## Getting Started

### Running the Visit My Cities Application

To run the **Visit My Cities** application locally, you first need to start the database services using Docker. The project uses a container that includes **MySQL** and **phpMyAdmin**.

Start the containers with:

```bash
docker-compose up -d
```

This will launch the MySQL database as well as phpMyAdmin, allowing you to manage the database from your browser.

Once the database is running, start the REST API using a tool such as IntelliJ.

Once the containers and the REST API are running, you can start the front-end application.

From the frontend project directory:

```bash
npm install
npm run start
```

This will start the development server.

### Running the application on Android

You can run the application in two different ways:

**1. Using Android Studio or iOS Simulator**
Open an Android emulator from Android Studio or an iOS simulator from Xcode and run the project. The app will automatically connect to the local development server.

**2. Using your physical phone**
If you want to run the application on your own phone, you must configure the environment variables correctly.

In particular, you need to replace the API_URL with **your computer's local IP address**, otherwise the phone will not be able to reach the server.

For example:

```
EXPO_PUBLIC_API_URL_TELEPHONE=http://192.168.X.X:8080
```
Once the environment variables are configured, restart the development server and scan the QR code (or run the app) from your device.

**The functionalities are :**
- Display a list of popular cities and buildings
- Display a list of building categories
- Show buildings/places for each city with name and image
- View detailed information for each building (address, opening hours, description, key info, visit info, location)
- Navigate between buildings and cities within the app
- Maintain a list of favorite cities and buildings
- Add a city or building to the favorites list
- View a map with building location
- Basic user profile display (view own information)
- Sign in and sign up functionality (mainly useful for expert users at the moment)
- Add new buildings via the form (front-end submission + back-end handling)
- Display a route from your current location to the building using Google Maps

**The functionalities in building :**

- Add the favorite button on place cards
- Make the search bar work
- Add filter and sort functionality
- Create a V2 VisitScreen with the possibility to group buildings by city
- Implement the planning functionality to create a route between buildings in a city
- ProfileScreen with more information (editing personal details)
- Make a more elaborate external back-office, or add delete and edit functionality for buildings and cities
- Add a full-screen map in BuildingDetailScreen to show the user’s current location
- Add the possibility to open a route with Apple Maps
- Allow users to suggest a new building
  
**Stacks used :**
- React Native (Zustand, Expo, React Hook Form)
- Spring Boot
- MySQL
- PhpMyAdmin
- Postman
- Docker

## Screenshots : ##

<img width="275" height="596" alt="Screenshot_1772975188" src="https://github.com/user-attachments/assets/1c03578b-2fcc-4434-9ba9-a467ec7bbf69" />
<img width="275" height="596" alt="Screenshot_1773163422" src="https://github.com/user-attachments/assets/7c1b9ec0-94d3-453a-b40a-8feccb0571ad" />
<br><br>
<img width="275" height="596" alt="Screenshot_1772983393" src="https://github.com/user-attachments/assets/7ebe3d0b-d1ec-4655-a2d2-8c28ba4398b9" />
<img width="275" height="596" alt="Screenshot_1772983485" src="https://github.com/user-attachments/assets/6f243d81-d60a-4fcb-96aa-30cd2aebccbf" />
<img width="275" height="596" alt="Screenshot_1772983498" src="https://github.com/user-attachments/assets/05dfb681-4563-480c-aab2-575fdc6644dc" />
<br><br>
<img width="275" height="596" alt="Screenshot_1772983782" src="https://github.com/user-attachments/assets/329787d4-28bb-481e-bc0f-02f8d6968589" />
<img width="275" height="596" alt="Screenshot_1772981309" src="https://github.com/user-attachments/assets/63c36440-c566-4fcb-a921-03a5ef7bac2e" />
<br><br>
<img width="275" height="596" alt="Screenshot_1773161786" src="https://github.com/user-attachments/assets/9f14da5a-081f-4ad9-8dfe-34ee11ae8727" />
<img width="275" height="596" alt="Screenshot_1772982380" src="https://github.com/user-attachments/assets/cbf0480e-8d11-4b20-a2bb-07b5b4f2a228" />
<img width="275" height="596" alt="Screenshot_1772982603" src="https://github.com/user-attachments/assets/78bec69f-485c-44e4-a729-21d46358b9c9" />
