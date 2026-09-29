#!/usr/bin/env python3
"""
scale_css.py — 935px → 794px 等比縮放腳本
縮放比例：794 / 935 = 0.8492...
"""

import re
import shutil
import os

SCALE = 794 / 935  # ≈ 0.8492

# 不縮放的精確 px 值（邊框、outline、breakpoint）
SKIP_EXACT = {1.0, 1.5, 2.0, 2.5, 720.0, 650.0, 3.0}

CSS_FILES = [
    "style.css",
    "theme-hybrid.css",
    "theme-canva.css",
    "theme-pages.css",
]

def scale_px(m):
    val = float(m.group(1))
    if val in SKIP_EXACT:
        return m.group(0)  # 保持原樣
    scaled = round(val * SCALE, 1)
    # 如果縮放後是整數，去掉小數點
    if scaled == int(scaled):
        return f"{int(scaled)}px"
    return f"{scaled}px"

for fname in CSS_FILES:
    if not os.path.exists(fname):
        print(f"⚠️  找不到 {fname}，跳過")
        continue

    # 備份
    bak = fname + ".bak"
    shutil.copy(fname, bak)
    print(f"📦 已備份 {fname} → {bak}")

    text = open(fname, encoding="utf-8").read()

    # 縮放所有 px 值（含小數）
    text = re.sub(r'(\d+(?:\.\d+)?)px', scale_px, text)

    with open(fname, "w", encoding="utf-8") as f:
        f.write(text)

    print(f"✅ 已縮放 {fname}")

print(f"\n🎯 縮放比例：{SCALE:.4f}（935px → 794px）")
print("完成！請執行 build_preview.py 確認結果。")
