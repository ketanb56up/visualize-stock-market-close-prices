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
