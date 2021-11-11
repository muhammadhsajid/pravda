#news recommendation algorithm
#import pandasdb as pd
#import numpy as np
#news to rating as dict?
#1-5
import math
#20 News Sources
ns = ["NBC", "CBS","CNN", "FoxNews", "Reuters", "Business Insider", "New York Post"
        ,"The Hill", "Associated Press", "Huffington Post", "The New York Times", "Politico"
        , "The Guardian", "The Washington Post", "Wall Street Journal"]
#METHODOLOGY
'''
ways to suggest user content?
ML? (difficult and possibly cumbersome, can have cool results)
inverse-page-rank? (proven and tested algo, gotta use a graph system of articles? how to do though)
number-based (rank articles viewed vs bias as a number and suggest stdev  outside of it)

'''
def biasadj(userbias):
    userbias = 1.8752 #just temp val for now, replace by using json later and calcing avg value;
    bias_adj_score = []
    #positive adj:
    bias_adj_score.append(userbias+(math.sqrt(5-userbias)/5))
    #negative adj:
    bias_adj_score.append(userbias-(math.sqrt(-(0-userbias)))/5)
    return(bias_adj_score)
def drawing(drawmat):
    return 0
def ranking(bias_adj_score):
    return 0
def topics(rankmat):
    return 0
    

