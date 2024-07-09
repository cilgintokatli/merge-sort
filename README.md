# Merge Sort Aşamaları

**Array:** [16,21,11,8,12,22]

1 - Array'i ikiye böler: [16,21,11],[8,12,22]

2- Alt arrayleri tekrar ikiye böler [16], [21,11], [12,22]

3- Alt arrayleri tekrar ikiye böler ve arrayler tek elemanlı kaldığı için ikiye bölmeyi durdurur: [16] [21] [11] [8] [12] [22]

4- Arraylerin 0 indexli ilk elemanlarını karşılaştırarak sıralayıp birleştirmeye başlar: [16],[11,21],[8],[12,22]

5- Aynı işlemi devam ettirir: [11,16,21],[8,12,22]

6 - Tekrar aynı işlemi yapar ve artık sol ve sağ arrayler kalmadığı için işlemi durdurur.
