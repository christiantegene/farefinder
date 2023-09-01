from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os


app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "World!"}
