"""Script pro tvorbu knih v csv formatu z kanonu na strankach

ň a Á nefunguje, je potřeba řešit manuálně"""
import sys

OBDOBI = "20-21-cz"   # 18, 19, 20-21-svet, 20-21-cz, pripadne ""
DRUH = "proza"             # proza, poezie, drama, pripadne ""
INPUT = "input.txt"
OUTPUT = "output.txt"

sys.stdout = open(OUTPUT, "w")


with open(INPUT) as input, open(OUTPUT, "w") as out:
    for line in input:
        while line[0] != ".":
            # urizni vse pred ciselnem oznaceni knihy
            line = line[1:]
        # pote urizni tecku, mezeru na zacatku a linebreak na konci
        line = line[1:].strip()
        
        # jestlize je kniha, kde neni dvojtecka, nebo je jich vice
        # nejspis nema autora, nebo ma divny nazev, potreba vlozit
        # manualne
        if line.count(":") != 1:
            raise ValueError(f"nachazi se spatnym poctem dvojtecek: {line}")
        
        autor, nazev = line.split(":")
        autor = autor.strip()
        nazev = nazev.strip()
        
        print(nazev, autor, OBDOBI, DRUH, sep=";")