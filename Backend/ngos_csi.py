#!/usr/bin/env python
# coding: utf-8

# In[1]:


# 19.125076600000014, 72.83273467301058


# **Current coordinates**

# In[2]:


import requests
import json

# In[3]:


res=requests.get('https://ipinfo.io')


# In[4]:


# print(res.text)


# In[5]:


dt=res.json()


# In[6]:


# print(dt)


# In[7]:


# print(dt['loc'])


# In[8]:


loc=dt['loc'].split(',')


# In[9]:


lat=loc[0]
long=loc[1]


# In[10]:


# type(lat)


# In[11]:


lat=float(lat)


# In[12]:


# type(lat)


# In[13]:


long=float(long)


# In[14]:


import pandas as pd
import numpy as np


# In[15]:


df=pd.read_csv('ngo.csv')


# In[16]:


# df.head()


# In[17]:


# df.info()


# In[18]:


diff_latitude=[]
for x in df['latitude'] :
    diff_latitude.append(abs(x-lat))


# In[19]:


diff_longitude=[]
for x in df['longitude'] :
    diff_longitude.append(abs(x-long))


# In[20]:


latitude_difference=pd.Series(diff_latitude)
longitude_difference=pd.Series(diff_longitude)


# In[21]:


df1=df.copy()


# In[22]:


# df1.head()


# In[23]:


df1=pd.concat([df1,latitude_difference,longitude_difference],axis=1)


# In[24]:


df1.columns=['ngo','address','latitude','longitude','latitudediff','longitudediff']


# In[25]:


# df1.head()


# In[26]:


df1=df1.sort_values(by=['latitudediff','longitudediff'],ascending=True)


# In[27]:
# for x in range(len(df1)):
#     print(df1.loc[x,'ngo'],'\t',df1.loc[x,'address'])
df1 = df1.to_json()
print(df1)

# In[ ]:




