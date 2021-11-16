#news recommendation algorithm
#import pandasdb as pd
#import numpy as np
#news to rating as dict?
#1-5
import math
import random
#20 News Sources
ns = [["huffpost.com", "buzzfeednews.com"]
        ,["cnn.com", "theguardian.com", "politico.com", "nbcnews.com", "cbsnews.com", "nytimes.com"]
        ,["reuters.com", "apnews.com", "economist.com", "theatlantic.com", "npr.org", "pbs.org", "c-span.org"]
        ,["foxnews.com", "thehill.com", "washingtonpost.com", "businessinsider.com", "wsj.com"]
        ,["nypost.com", "theepochtimes.com"]]
#METHODOLOGY
'''
ways to suggest user content?
ML? (difficult and possibly cumbersome, can have cool results)
inverse-page-rank? (proven and tested algo, gotta use a graph system of articles? how to do though)
number-based (rank articles viewed vs bias as a number and suggest stdev  outside of it)

'''
def biasadj(userbias):
    #just temp val for now, replace by using json later and calcing avg value;
    bias_adj_score = []
    #positive adj:
    bias_adj_score.append(userbias-(math.sqrt(-(0-userbias)))/5)
    bias_adj_score.append(userbias+(math.sqrt(5-userbias)/5))
    #negative adj:
    return(bias_adj_score)
def drawing(userbias):
    normal = biasadj(userbias)
    heavyl = False
    heavyr = False
    adjbiasscore = round(userbias)
    realadjscores = []

    if(userbias-1 < 1):
        #print("User is Biased heavily")
        heavyl = True
        realadjscores = [2,4]
        #print(realadjscores)
    elif(userbias-4 < 1):
        heavyr = True
        realadjscores = [2,4]
        #print(realadjscores)
    #2 favored articles, 4 l bias, 4 r bias
    overallrec = []
    brec = []
    for i in range(0,2):
        brec.append(random.choice(ns[adjbiasscore-1]))
    lrec = []
    overallrec.append(brec)
    for i in range(0,4):
        lrec.append(random.choice(ns[(round(realadjscores[0]))-1]))
    overallrec.append(lrec)
    rrec = []
    for i in range(0,4):
        rrec.append(random.choice(ns[(round(realadjscores[1])-1)]))
    overallrec.append(rrec)
    #print(overallrec)
    return(overallrec)
    #print(adjbiasscore)    
    return 0
def printtofile(overallrec):
    with open("api-generations.txt", "w+") as f:
        for x in overallrec:
            for y in x:
                towr = "https://newsapi.org/v2/everything?domains="+y+"&language=en&pageSize=1&apiKey=5ef0393bf9dd4571a0be26e65e10b9a2\n"
                f.write(towr)
                #print(towr)
def ranking(bias_adj_score):
    return 0
def topics(rankmat):
    return 0
    
x = drawing(3.512)
printtofile(x)
