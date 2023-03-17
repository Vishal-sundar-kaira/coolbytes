
# In[303]:


import pandas as pd
import numpy as np
import sys

# In[304]:
df1=pd.read_csv('food_data.csv', encoding= 'unicode_escape')
df1.columns=['product','expiry']

# In[305]:


# df1.head()


# In[306]:


import datetime


# In[307]:


today = datetime.date.today()


# In[308]:


# print(today)


# In[309]:


ts=pd.Timestamp(today)


# In[310]:


# ts


# In[311]:


df1['expiry'] = pd.to_datetime(df1['expiry'], errors='coerce')


# In[312]:


# df1.info()


# In[313]:


ind=df1['expiry'].index


# In[314]:


# ind


# In[315]:


#df1['use by'] = df1['use by'].dt.strftime('%d/%m/%Y')


# In[316]:


# df1.info()


# In[317]:


# df1.head()


# In[318]:


l=[]
for x in df1['expiry']:
    l.append((x-ts))


# In[319]:


# l


# In[320]:


z=pd.Series(l)


# In[321]:


# z


# In[322]:


df1['diff']=z


# In[323]:


# df1.head()


# In[324]:


df1=df1.sort_values(by='diff',ascending=True)


# In[325]:
# print(df1)
for i in range(0,len(df1['product']),1):
    df1['product'][i]=df1['product'][i].replace('|',' ')
# for i in range(0,len(df1['product']),1):
#     df1['product'][i]=df1['product'][i].replace('/',' ')
# for i in range(0,len(df1['product']),1):
#     df1['product'][i]=df1['product'][i].replace('\',' ')

# df1 = df1.astype({'diff':'int'})
# df1 = df1.astype({'product':'string'})
df1['diff']=df1['diff'].apply(lambda i:int(i.days))
df1 = df1.to_json()
print(df1)


# In[ ]:




