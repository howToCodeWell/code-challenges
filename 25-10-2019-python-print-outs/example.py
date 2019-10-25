import random


def age_calc(age, multiplier):
    return age * multiplier


print('Peter Fisher ', age_calc(35, random.randint(1, 10)))
