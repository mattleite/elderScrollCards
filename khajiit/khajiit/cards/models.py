from django.db import models

class Set(models,Model):
    id = models.CharField(max_length=200)
    name = models.CharField(max_length=200)

class Card(models.Model):
    id = models.CharField(max_length=200)
    name = models.CharField(max_length=200)
    rarity = models.CharField(max_length=200)
    type = models.CharField(max_length=200)
    subtypes = models.CharField(max_length=200)
    cost = models.IntegerField(default=0)
    power = models.IntegerField(default=0)
    health = models.IntegerField(default=0)
    soulSummon = models.IntegerField(default=0)
    soulTrap = models.IntegerField(default=0)
    text = models.CharField(max_length=200)
    unique = models.BooleanField(default=False)
    set = models.ForeignKey(Set, on_delete=models.CASCADE)

# attributes the attributes of the card (ex. Agility, Endurance, Intelligence)
# keywords The keywords of the card (ex. Assemble, Breakthrough, Charge)