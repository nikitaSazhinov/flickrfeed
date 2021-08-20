# Coding challenge
This page consists a challenge for Natural Langugage Processing (NLP)/Machine Learning (ML) roles at Miyagami.

# Purpose
Aim of this test is three fold,

- evaluate your NLP/ML abilities 
- judge your data science experince
- understand how you select an algorithm and tune it

# How you will be judged
You will be scored on,

- overall solution design
- choice of algorithms and tools
- appropriate use of source control

We are more interested in approach and a working solution, quality of output at this stage is not a major issue.

# Intructions

- You can use any tool or languaues you want but we suggest you use some of the following: [Python](http://python.org), [Pandas](http://pandas.pydata.org/), [Scikit-learn](http://scikit-learn.org/), [Numpy](http://www.numpy.org/), [Scipy](https://www.scipy.org/), [Spark](http://spark.apache.org/), [Tensorflow](https://www.tensorflow.org/), [Jupyter Notebook](http://jupyter.org/)
- Candidate should put their test results on a public code repository hosted on Github
- Once test is completed please share the Github repository URL to hiring team so they can review your work

# Challenge - Document clustering using NLP/ML techniques
[A data set of 300 documents](https://github.com/miyagami-com/Coding-Cases/main/NLP-test.json) is provided with this challenge in a JSON file format. Use headline, abstract, searchabletext, prospect keywords, created date time and any other attribute to cluster these documents.

You can use any unsupervised or semi-supervised techniques to cluster these documents. Use appropriate NLP techniques such as Word2Vec, Word2Word, Word2Document, TF/IDF as requried. Provide some type of ranking or score for the cluster as well as individual documents in the cluster.

If possible propose title/topic for the clustered document based on text content of the cluster.

# Bonus point
If you deploy the solution as Jupyter Notebook using an Amazon EC2 instance.