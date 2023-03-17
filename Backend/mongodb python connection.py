#!/usr/bin/env python
# coding: utf-8

# In[123]:


#pip install pymongo


# In[124]:


import pymongo
from pymongo import MongoClient
import pandas as pd


# In[125]:


url='mongodb+srv://vishal123:Vishalmongouser@cluster0.q2rbdx0.mongodb.net/inotebook'
client=MongoClient(url)


# In[126]:


db=client['inotebook']


# In[127]:


d=[]
for i in db.notes.find():
    d.append(i)


# In[128]:


df=pd.DataFrame(d)


# In[129]:


df=df.dropna(subset='number')


# In[130]:


df['number']=df['number'].astype('int64')


# In[131]:


df=df.drop(['_id','user','__v'],axis=1)


# In[132]:
df = df.to_json()

print(df)

