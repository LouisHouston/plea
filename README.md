# Plea
Simple Stalls, online flea market if you will.

## Created By: Louis Roque-Apiag Houston

### Left over instructions

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.


## 1/18/25: Log - Auth/Login
Got authprovider working, I understood how a provider works in React but wrapping an entire NextJS project was a little confusing because i didnt understand how the structure of the project loads. Now I completely understand the difference between the _app.tsx apporach and the layout.tsx with page.tsx and subdirectories work.

## 1/20/25: Log - Login and Tokens
Backend and frontend communicating correctly for the login authentication. The query was set up incorrectly one was backend using email and frontend asking for username. Something as simple as that cannot happen on a production level.

💡The fetch needed credentials 'include' this line was breaking my cookie being stored correctly, however we might be able to use the handleSubmit function to adjust as needed like we can include the 'stalls' this user owns or is involved with.


## 1/25/25: Log - Actually getting AuthProvider to provide data
From the AuthContext Wrap talk about getting login and reading in User Data
we, but we can store the settings as a algorithm like blah.uid.settings and that can be like 0/1, 0/1 and those all breakdown to set settings on or off.
Creating stalls should be no issue with page settings and such 