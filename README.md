# User Registration App

## Minimum Viable Product Requirements:
1. Create an user interface allowing users:
- to sign in if he/she is an existing user
- update user profile if an existing user
- register new user
2. Create a database and api faciliting above requirements.

## User Registration App Workflow:
### Main components of the user interface:

1. Log-in Page
2. User Profile Page
3. User Registration Page
4. Forgot Password Modal
5. Registration Confirmation Modal

### Navigation through pages:

1. The app starts at the **Log-in Page**

2. User to enter *valid log-in criteria* to navigate to **User Profile Page**
- If not, *an error message* is prompted

3. User clicking *Forgot User Name/Password* will prompt the **Forgot Password Modal**
- User to enter the *previously registered email*
- User to click **Get New Password**
- An *err message* returned if no email in the database match the provided email.
- Else, a *confirmation* is prompted
- User to exist the **Modal**

4. User clicking *New user* will lead to the **User Registration Page**
- User to complete the registration form
- User clicking the *Create User*
- Return an *error message* if the email already exists in the database
- Else, **Registration Confirmation Modal** is prompted
- User to exit the **Registration Confirmation Modal** and return to **Log-in Page**



## Database Schema
- The database for the app is currently deployed with only one collection: **user**
- The **user** collection is composed of documents with the following minimum data:

    {
        _id: ObjectID(),
        fullname: string,
        email: string,
        authentication: {
            username: string,
            password: password
        },
        securequestion: {
            question: string,
            response: string,
        }
    }

- **username** must be **unique** for each user