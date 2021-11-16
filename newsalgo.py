#news recommendation algorithm
#import pandasdb as pd
#import numpy as np
#news to rating as dict?
#1-5
import math
import random
#20 News Sources
ns = [["Huffington Post", "Buzzfeed News"]
        ,["CNN", "The Guardian", "Politico", "NBC News", "CBS News", "The New York Times"]
        ,["Reuters", "Associated Press", "The Economist", "The Atlantic", "npr", "pbs", "c-span"]
        ,["Fox News", "The Hill", "The Washington Post", "Business Insider", "The Wall Street Journal"]
        ,["New York Post"]]
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
        print(realadjscores)
    elif(userbias-4 < 1):
        heavyr = True
        realadjscores = [2,4]
        print(realadjscores)
    #6 favored articles, 7 l bias, 7 r bias
    overallrec = []
    brec = []
    for i in range(0,5):
        brec.append(random.choice(ns[adjbiasscore-1]))
    overallrec.append(brec)
    print(overallrec)
    print(adjbiasscore)    
    return 0
def ranking(bias_adj_score):
    return 0
def topics(rankmat):
    return 0
    
drawing(4.512)
