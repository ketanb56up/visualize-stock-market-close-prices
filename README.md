# Visualize-Stock-Market-Close-Prices

#### Backend Setup

First take clone using below command

```
git clone https://github.com/ketanb56up/visualize_stock_market
```

#### Environment Setup

Create a virtualenv using this command and activate it

```
python -m venv stock_venv

source stock_venv/bin/activate
```

#### Requirements

Install all requirements using below command

```
pip3 install -r requirements.txt
```

#### Run Server and migrations
To run server and migrations use these command

```
python manage.py migrate

python manage.py runserver
```

#### Run Script

To run management command
```
python manage.py create_stocks_command 
```

#### Access API

Use below link to get filtered stocks data as response

```
http://localhost:8000/api/stock/<Stock Name>/
```
here inplace of <Stack Name> use stock names like OCTZ, AFLG, AFMC

### Front-End Setup

First we have to install node js and npm with latest version.

#### Run Application

After install latest version of node and 
install npm in the root directory using below command
```
npm i
```

Create a `.env` file and put following code and save
```
$ cat .env
REACT_APP_URL=http://localhost:8000

$
```

Next start app using below command
```
npm start
```

And Open below url to the browser
```
http://localhost:3000/
```
