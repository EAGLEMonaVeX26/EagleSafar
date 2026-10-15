from math import comb
from pathlib import Path
from PIL import Image, ImageDraw

ROOT = Path(__file__).resolve().parents[1] / "client" / "public" / "icons"
ROOT.mkdir(parents=True, exist_ok=True)
S = 1024
BG = "#17463d"
IVORY = "#f8f7f2"
GOLD = "#e4b45e"

def bezier(p0, p1, p2, p3, steps=80):
    pts = []
    for i in range(steps + 1):
        t = i / steps
        u = 1 - t
        pts.append((
            u**3*p0[0] + 3*u*u*t*p1[0] + 3*u*t*t*p2[0] + t**3*p3[0],
            u**3*p0[1] + 3*u*u*t*p1[1] + 3*u*t*t*p2[1] + t**3*p3[1],
        ))
    return pts

img = Image.new("RGB", (S, S), BG)
d = ImageDraw.Draw(img)
d.rounded_rectangle((28, 28, S-28, S-28), radius=220, fill=BG)
# Globe ring and restrained longitude/equator lines.
d.ellipse((170, 170, 854, 854), outline=IVORY, width=22)
d.ellipse((337, 170, 687, 854), outline="#b9cfc3", width=15)
d.arc((170, 335, 854, 689), start=180, end=360, fill="#b9cfc3", width=14)
d.arc((170, 335, 854, 689), start=0, end=180, fill="#b9cfc3", width=14)
# Original eagle-wing silhouette sweeps across a globe route.
wing = []
wing += bezier((150, 560), (365, 545), (605, 390), (850, 178), 90)
wing += bezier((850, 178), (807, 302), (720, 391), (635, 447), 50)[1:]
wing += bezier((635, 447), (725, 426), (805, 386), (870, 337), 48)[1:]
wing += bezier((870, 337), (808, 481), (679, 544), (526, 565), 55)[1:]
wing += bezier((526, 565), (584, 585), (643, 580), (703, 565), 40)[1:]
wing += bezier((703, 565), (542, 667), (338, 676), (150, 560), 65)[1:]
d.polygon(wing, fill=GOLD)
# Feather separations and a small destination point.
d.line(bezier((255, 582), (395, 570), (532, 500), (670, 388), 46), fill=BG, width=13)
d.line(bezier((315, 613), (430, 604), (520, 566), (596, 515), 34), fill=BG, width=13)
d.line(bezier((402, 642), (488, 637), (555, 620), (610, 593), 28), fill=BG, width=13)
d.ellipse((818, 145, 880, 207), fill=IVORY)
for size in (512, 192, 180):
    out = img.resize((size, size), Image.Resampling.LANCZOS)
    out.save(ROOT / f"icon-{size}.png", optimize=True)
print("Generated 192, 512 and 180 px EagleSafar app icons")
