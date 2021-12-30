# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:


### `npm install`
<pre>npm i bcryptjs --save    #untuk mengecrypt password</pre>
<pre>npm i jsonwebtoken --save    #untuk membuat session yang disimpan di auth setip melakukan request</pre>
<pre>npm i randomstring --save    #untuk membuat random string</pre>
<br />
<pre>npm i react-router-dom@6.2.1 --save    #untuk memaikai feature router di React</pre>
<br />

### `yarn install`

install package yang diperlukan untuk menjalankan reactjs dengan tamplate typescript. <br />
install node_modules for package <br />
<pre>sudo npm i -g yarn</pre> 			
<pre>yarn install</pre> <br />			
<pre>sudo yarn create react-app react-ts-frontend --template typescript</pre> 			
<pre>sudo chmod -R 777 react-ts-frontend</pre> 			
<pre>cd react-ts-frontend</pre> 			
<br /> [ menjalankan sebelum dibuild ] <br /> <pre>yarn start</pre>
<pre>yarn build</pre> 
<br /> [ menjalankan serve static di folder ./build ] <br /> <pre>serve -s build</pre>	 
<br />
<br /> React Typescript dan Tailwinds			https://www.youtube.com/watch?v=zx_879gAoYo	<br />
	<pre>yarn add tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^8 autoprefixer@^9</pre> 			
	<pre>yarn add uuid @types/uuid @tailwindcss/forms</pre> 
	<pre>yarn tailwindcss init</pre> 
				
<br /> tidak usah pakai craco      
https://stackoverflow.com/questions/70403417/typeerror-match-loader-options-plugins-is-not-a-function/70409552	<br />
<br />
<br />


### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
