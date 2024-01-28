const fps = 1000 / 60;
const speed = fps * 4;
const stackDelay = fps * 2;

const logoElement = document.getElementById("logo");
const resetBtn = document.getElementById("resetSymbol");
const logoPicker = document.getElementById("logoPicker");
const gridToggler = document.getElementById("gridToggler");
const downloadSvgElement = document.getElementById('downloadSvg');

const logos = [
    {
        name: 'Parametric',
        seed: '23131151',
        wordmark: `
            <path d="M1200 350.88H1298.08C1348.41 350.88 1384.54 382.09 1384.54 430.89C1384.54 479.69 1347.65 510.62 1298.08 510.62H1239.58V600H1200V350.88ZM1295 474.11C1323.82 474.11 1344.19 458.94 1344.19 430.89C1344.19 402.84 1323.83 387 1295 387H1239.58V474.11H1295Z" fill="black"/>
            <path d="M1606.21 402.49H1644.26V444.37H1652.33C1658.09 425.16 1676.54 399.03 1716.5 399.03V440.14H1703.44C1663.48 440.14 1644.65 468.58 1644.65 500.47V599.99H1606.22V402.48L1606.21 402.49Z" fill="black"/>
            <path d="M1939.71 402.49H1978.14V437.84H1985.82C1991.58 416.71 2010.8 397.5 2041.16 397.5C2073.82 397.5 2094.18 415.94 2101.87 437.84H2110.33C2117.63 416.33 2136.07 397.5 2166.43 397.5C2210.61 397.5 2235.21 430.93 2235.21 469.36V600.01H2196.79V480.51C2196.79 452.07 2179.5 434.01 2152.6 434.01C2125.7 434.01 2106.87 452.45 2106.87 484.73V600.01H2068.45V480.12C2068.45 452.07 2049.24 434.01 2023.49 434.01C1997.74 434.01 1978.15 455.14 1978.15 484.73V600.01H1939.72V402.5L1939.71 402.49Z" fill="black"/>
            <path d="M2264 500.1C2264 438.23 2307.42 397.5 2362.75 397.5C2422.7 397.5 2458.05 443.22 2456.13 495.49L2455.36 513.93H2302.04C2306.64 548.9 2328.16 571.19 2363.52 571.19C2387.72 571.19 2407.32 560.04 2418.85 541.99L2447.29 560.43C2431.53 586.95 2402.33 605 2363.52 605C2304.34 605 2263.99 561.58 2263.99 500.1H2264ZM2418.85 481.65C2418.08 453.22 2395.02 430.16 2362.75 430.16C2330.48 430.16 2308.95 451.3 2302.81 481.65H2418.86H2418.85Z" fill="black"/>
            <path d="M2504.52 546.59V435.15H2469.94V402.49H2505.3V351.78H2542.96V402.49H2601.75V435.15H2542.96V544.67C2542.96 560.04 2551.41 565.8 2563.32 565.8H2599.06V600H2558.32C2528.35 600 2504.52 583.87 2504.52 546.59Z" fill="black"/>
            <path d="M2635.54 402.49H2673.58V444.37H2681.65C2687.42 425.16 2705.86 399.03 2745.82 399.03V440.14H2732.76C2692.8 440.14 2673.97 468.58 2673.97 500.47V599.99H2635.55V402.48L2635.54 402.49Z" fill="black"/>
            <path d="M2774.25 402.49H2812.68V600H2774.25V402.49Z" fill="black"/>
            <path d="M2793.47 325C2807.28 325 2818.47 336.19 2818.47 350C2818.47 363.81 2807.28 375 2793.47 375C2779.66 375 2768.47 363.81 2768.47 350C2768.47 336.19 2779.66 325 2793.47 325Z" fill="black"/>
            <path d="M2842.64 501.25C2842.64 441.69 2886.45 397.5 2945.62 397.5C2986.36 397.5 3021.32 417.48 3037.07 456.29L3004.03 473.58C2997.11 452.06 2975.21 432.84 2945.62 432.84C2908.73 432.84 2881.83 461.28 2881.83 501.24C2881.83 541.2 2909.89 569.64 2945.62 569.64C2972.52 569.64 2997.11 555.42 3007.1 526.6L3039.76 541.98C3024.39 585.01 2987.5 604.99 2945.62 604.99C2885.68 604.99 2842.64 560.8 2842.64 501.24V501.25Z" fill="black"/>
            <path d="M1487.12 397.5C1446 397.5 1416.41 419.79 1407.96 454.75L1442.16 464.36C1444.85 448.23 1459.07 430.93 1487.12 430.93C1515.17 430.93 1533.62 450.14 1533.62 474.35V479.73H1471.76C1428.34 479.73 1399.51 504.71 1399.51 541.59C1399.51 578.47 1428.71 605 1470.22 605C1502.5 605 1524.4 588.48 1529.78 563.12H1537.47V600.01H1571.28V474.36C1571.28 434.78 1542.85 397.51 1487.13 397.51L1487.12 397.5ZM1533.61 515.47C1533.61 543.52 1517.86 572.72 1477.51 572.72C1455.99 572.72 1438.31 560.81 1438.31 540.83C1438.31 522.39 1451.76 510.09 1475.97 510.09H1533.6V515.47H1533.61Z" fill="black"/>
            <path d="M1820.62 397.5C1779.5 397.5 1749.91 419.79 1741.46 454.75L1775.66 464.36C1778.35 448.23 1792.57 430.93 1820.62 430.93C1848.67 430.93 1867.12 450.14 1867.12 474.35V479.73H1805.26C1761.84 479.73 1733.01 504.71 1733.01 541.59C1733.01 578.47 1762.21 605 1803.72 605C1836 605 1857.9 588.48 1863.28 563.12H1870.97V600.01H1904.78V474.36C1904.78 434.78 1876.35 397.51 1820.63 397.51L1820.62 397.5ZM1867.11 515.47C1867.11 543.52 1851.36 572.72 1811.01 572.72C1789.49 572.72 1771.81 560.81 1771.81 540.83C1771.81 522.39 1785.26 510.09 1809.47 510.09H1867.1V515.47H1867.11Z" fill="black"/>
        `,
        grid: `
            <path d="M0 200H3250" stroke="black" stroke-miterlimit="10"/>
            <path d="M0 400H3250" stroke="black" stroke-miterlimit="10"/>
            <path d="M0 600H3250" stroke="black" stroke-miterlimit="10"/>
            <path d="M200 0V800" stroke="black" stroke-miterlimit="10"/>
            <path d="M600 0V800" stroke="black" stroke-miterlimit="10"/>
            <path d="M1000 0V800" stroke="black" stroke-miterlimit="10"/>
            <path d="M1200 0V800" stroke="black" stroke-miterlimit="10"/>
            <path d="M3050 0V800" stroke="black" stroke-miterlimit="10"/>
            <path d="M1200 350H3050" stroke="black" stroke-width="0.5" stroke-miterlimit="1" stroke-dasharray="5 5"/>
            <path d="M1200 300H3050" stroke="black" stroke-width="0.5" stroke-miterlimit="1" stroke-dasharray="5 5"/>
            <path d="M800 0V800" stroke="black" stroke-width="0.5" stroke-miterlimit="1" stroke-dasharray="5 5"/>
            <path d="M400 0V800" stroke="black" stroke-width="0.5" stroke-miterlimit="1" stroke-dasharray="5 5"/>
        `,
        width: 3250,
    },{
        name: 'Hektar',
        seed: '00131451',
        wordmark: `
                <g id="logo--wordmark">
                <path fill="black" d="M1357.3 490.75H1239.96V600H1200V350.89H1239.96V453.09H1357.3V350.89H1397.26V600H1357.3V490.75Z" />
                <path fill="black" d="M1422.98 500.09C1422.98 438.22 1466.4 397.49 1521.73 397.49C1581.68 397.49 1617.03 443.22 1615.1 495.48L1614.33 513.92H1461.02C1465.63 548.89 1487.14 571.18 1522.5 571.18C1546.71 571.18 1566.31 560.03 1577.83 541.98L1606.27 560.42C1590.51 586.93 1561.31 604.99 1522.5 604.99C1463.33 604.99 1422.97 561.57 1422.97 500.09H1422.98ZM1577.84 481.65C1577.07 453.22 1554.02 430.16 1521.74 430.16C1489.46 430.16 1467.95 451.29 1461.8 481.65H1577.84Z"/>
                <path fill="black" d="M1637.38 350.89H1675.42V481.66H1683.1L1761.87 402.5H1807.22V407.5L1734.98 478.97L1811.06 595.01V600.01H1768.79L1707.31 506.25L1675.42 537.76V600.01H1637.38V350.9V350.89Z"/>
                <path fill="black" d="M1846 546.59V435.15H1811.42V402.49H1846.78V350.88H1884.43V402.49H1943.22V435.15H1884.43V544.66C1884.43 560.03 1892.88 565.79 1904.79 565.79H1940.53V599.99H1899.8C1869.83 599.99 1846 583.85 1846 546.58V546.59Z"/>
                <path fill="black" d="M2164.91 402.49H2202.95V444.37H2211.02C2216.79 425.16 2235.23 399.03 2275.19 399.03V440.14H2262.13C2222.17 440.14 2203.34 468.57 2203.34 500.47V599.99H2164.92V402.48L2164.91 402.49Z"/>
                <path fill="black" d="M2045.42 397.5C2004.31 397.5 1974.72 419.79 1966.27 454.76L2000.47 464.37C2003.16 448.23 2017.38 430.94 2045.43 430.94C2073.48 430.94 2091.92 450.15 2091.92 474.36V479.74H2030.06C1986.64 479.74 1957.82 504.72 1957.82 541.61C1957.82 578.5 1987.02 605.01 2028.52 605.01C2060.8 605.01 2082.7 588.49 2088.09 563.13H2095.77V600.02H2129.59V474.37C2129.59 434.79 2101.15 397.52 2045.43 397.52L2045.42 397.5ZM2091.91 515.46C2091.91 543.51 2076.16 572.72 2035.81 572.72C2014.3 572.72 1996.62 560.81 1996.62 540.83C1996.62 522.39 2010.07 510.09 2034.28 510.09H2091.91V515.47V515.46Z"/>
        `,
        grid: `
            <path d="M0 200H2475" stroke="black" stroke-width="1" stroke-miterlimit="10"/>
            <path d="M0 400H2475" stroke="black" stroke-width="1" stroke-miterlimit="10"/>
            <path d="M0 600H2475" stroke="black" stroke-width="1" stroke-miterlimit="10"/>
            <path d="M1000 0V800" stroke="black" stroke-width="1" stroke-miterlimit="10"/>
            <path d="M1200 0V800" stroke="black" stroke-width="1" stroke-miterlimit="10"/>
            <path d="M2275 0V800" stroke="black" stroke-width="1" stroke-miterlimit="10"/>
            <path d="M200 0V800" stroke="black" stroke-width="1" stroke-miterlimit="10"/>
            <path d="M600 0V800" stroke="black" stroke-width="1" stroke-miterlimit="10"/>
            <path d="M1200 350H2275.18" stroke="black" stroke-width="0.5" stroke-miterlimit="1" stroke-dasharray="5,5"/>
            <path d="M1200 300H2275.18" stroke="black" stroke-width="0.5" stroke-miterlimit="1" stroke-dasharray="5,5"/>
            <path d="M800 0V800" stroke="black" stroke-width="0.5" stroke-miterlimit="1" stroke-dasharray="5,5"/>
            <path d="M400 0V800" stroke="black" stroke-width="0.5" stroke-miterlimit="1" stroke-dasharray="5,5"/>
        `,
        width: 2475,
    },{
        name: 'Hektar by Parametric',
        seed: '00131451',
        wordmark: `
            <path d="M1263.2 406.1H1216.06V450H1200V349.91H1216.06V390.97H1263.2V349.91H1279.26V450H1263.2V406.1Z" fill="black"/>
            <path d="M1289.59 409.861C1289.59 385.001 1307.04 368.641 1329.27 368.641C1353.36 368.641 1367.56 387.011 1366.79 408.011L1366.48 415.421H1304.88C1306.73 429.471 1315.38 438.421 1329.58 438.421C1339.31 438.421 1347.18 433.941 1351.81 426.691L1363.24 434.101C1356.91 444.751 1345.18 452.011 1329.58 452.011C1305.8 452.011 1289.59 434.561 1289.59 409.861ZM1351.81 402.451C1351.5 391.031 1342.24 381.761 1329.27 381.761C1316.3 381.761 1307.66 390.251 1305.19 402.451H1351.81Z" fill="black"/>
            <path d="M1375.73 349.91H1391.01V402.45H1394.1L1425.75 370.65H1443.97V372.66L1414.94 401.38L1445.51 448V450.01H1428.53L1403.83 412.34L1391.02 425V450.01H1375.74V349.92L1375.73 349.91Z" fill="black"/>
            <path d="M1459.55 428.54V383.77H1445.66V370.65H1459.87V349.92H1475V370.65H1498.62V383.77H1475V427.77C1475 433.94 1478.4 436.26 1483.18 436.26H1497.54V450H1481.17C1469.13 450 1459.56 443.52 1459.56 428.54H1459.55Z" fill="black"/>
            <path d="M1587.68 370.65H1602.96V387.48H1606.2C1608.52 379.76 1615.93 369.26 1631.98 369.26V385.78H1626.73C1610.67 385.78 1603.11 397.2 1603.11 410.02V450.01H1587.67V370.66L1587.68 370.65Z" fill="black"/>
            <path d="M1539.67 368.641C1523.15 368.641 1511.27 377.591 1507.87 391.641L1521.61 395.501C1522.69 389.021 1528.4 382.071 1539.67 382.071C1550.94 382.071 1558.35 389.791 1558.35 399.521V401.681H1533.49C1516.04 401.681 1504.47 411.721 1504.47 426.541C1504.47 441.361 1516.2 452.011 1532.87 452.011C1545.84 452.011 1554.64 445.371 1556.8 435.181H1559.89V450.001H1573.48V399.521C1573.48 383.621 1562.05 368.641 1539.67 368.641ZM1558.35 416.031C1558.35 427.301 1552.02 439.031 1535.81 439.031C1527.17 439.031 1520.06 434.241 1520.06 426.221C1520.06 418.811 1525.47 413.871 1535.19 413.871H1558.35V416.031Z" fill="black"/>
            <path d="M1425 499.91H1464.41C1484.63 499.91 1499.15 512.45 1499.15 532.06C1499.15 551.67 1484.33 564.09 1464.41 564.09H1440.9V600H1425V499.91ZM1463.17 549.42C1474.75 549.42 1482.93 543.32 1482.93 532.05C1482.93 520.78 1474.75 514.42 1463.17 514.42H1440.9V549.42H1463.17Z" fill="black"/>
            <path d="M1588.21 520.65H1603.5V537.48H1606.74C1609.05 529.76 1616.47 519.26 1632.52 519.26V535.78H1627.27C1611.21 535.78 1603.65 547.21 1603.65 560.02V600.01H1588.21V520.66V520.65Z" fill="black"/>
            <path d="M1722.2 520.651H1737.64V534.851H1740.73C1743.04 526.361 1750.76 518.641 1762.96 518.641C1776.08 518.641 1784.26 526.051 1787.35 534.851H1790.75C1793.68 526.211 1801.09 518.641 1813.29 518.641C1831.04 518.641 1840.92 532.071 1840.92 547.511V600.001H1825.48V551.991C1825.48 540.561 1818.53 533.311 1807.73 533.311C1796.93 533.311 1789.36 540.721 1789.36 553.691V600.011H1773.92V551.841C1773.92 540.571 1766.2 533.321 1755.85 533.321C1745.5 533.321 1737.63 541.811 1737.63 553.701V600.021H1722.19V520.671L1722.2 520.651Z" fill="black"/>
            <path d="M1852.49 559.861C1852.49 535.001 1869.94 518.641 1892.17 518.641C1916.26 518.641 1930.46 537.011 1929.69 558.011L1929.38 565.421H1867.78C1869.63 579.471 1878.28 588.431 1892.48 588.431C1902.2 588.431 1910.08 583.951 1914.71 576.701L1926.14 584.111C1919.81 594.761 1908.07 602.021 1892.48 602.021C1868.7 602.021 1852.49 584.581 1852.49 559.871V559.861ZM1914.71 552.451C1914.4 541.031 1905.14 531.761 1892.17 531.761C1879.2 531.761 1870.56 540.251 1868.09 552.451H1914.71Z" fill="black"/>
            <path d="M1949.13 578.54V533.77H1935.24V520.65H1949.45V500.28H1964.58V520.65H1988.2V533.77H1964.58V577.77C1964.58 583.94 1967.98 586.26 1972.76 586.26H1987.12V600H1970.75C1958.71 600 1949.14 593.52 1949.14 578.54H1949.13Z" fill="black"/>
            <path d="M2001.77 520.65H2017.05V537.48H2020.29C2022.61 529.76 2030.02 519.26 2046.07 519.26V535.78H2040.82C2024.76 535.78 2017.2 547.21 2017.2 560.02V600.01H2001.76V520.66L2001.77 520.65Z" fill="black"/>
            <path d="M2057.5 520.65H2072.94V600H2057.5V520.65Z" fill="black"/>
            <path d="M2065.22 489.51C2070.77 489.51 2075.26 494.01 2075.26 499.55C2075.26 505.1 2070.76 509.59 2065.22 509.59C2059.67 509.59 2055.18 505.09 2055.18 499.55C2055.18 494 2059.68 489.51 2065.22 489.51Z" fill="black"/>
            <path d="M2084.98 560.321C2084.98 536.391 2102.58 518.641 2126.36 518.641C2142.73 518.641 2156.78 526.671 2163.1 542.261L2149.82 549.211C2147.04 540.561 2138.24 532.841 2126.35 532.841C2111.53 532.841 2100.72 544.271 2100.72 560.321C2100.72 576.371 2111.99 587.801 2126.35 587.801C2137.16 587.801 2147.04 582.091 2151.05 570.511L2164.17 576.691C2158 593.981 2143.17 602.011 2126.35 602.011C2102.27 602.011 2084.97 584.261 2084.97 560.331L2084.98 560.321Z" fill="black"/>
            <path d="M1540.36 518.641C1523.84 518.641 1511.95 527.591 1508.56 541.641L1522.3 545.501C1523.38 539.021 1529.09 532.071 1540.36 532.071C1551.63 532.071 1559.04 539.791 1559.04 549.521V551.681H1534.18C1516.73 551.681 1505.15 561.711 1505.15 576.541C1505.15 591.371 1516.88 602.011 1533.56 602.011C1546.53 602.011 1555.33 595.371 1557.49 585.181H1560.58V600.001H1574.16V549.521C1574.16 533.621 1562.74 518.641 1540.35 518.641H1540.36ZM1559.04 566.041C1559.04 577.311 1552.71 589.041 1536.5 589.041C1527.85 589.041 1520.75 584.251 1520.75 576.231C1520.75 568.821 1526.16 563.881 1535.88 563.881H1559.04V566.041Z" fill="black"/>
            <path d="M1674.35 518.641C1657.83 518.641 1645.94 527.591 1642.55 541.641L1656.29 545.501C1657.37 539.021 1663.08 532.071 1674.35 532.071C1685.62 532.071 1693.03 539.791 1693.03 549.521V551.681H1668.17C1650.72 551.681 1639.14 561.711 1639.14 576.541C1639.14 591.371 1650.87 602.011 1667.55 602.011C1680.52 602.011 1689.32 595.371 1691.48 585.181H1694.57V600.001H1708.15V549.521C1708.15 533.621 1696.73 518.641 1674.34 518.641H1674.35ZM1693.03 566.041C1693.03 577.311 1686.7 589.041 1670.49 589.041C1661.84 589.041 1654.74 584.251 1654.74 576.231C1654.74 568.821 1660.15 563.881 1669.87 563.881H1693.03V566.041Z" fill="black"/>
            <path d="M1218.53 585.8H1215.29V600H1200.01V500H1215.29V534.85H1218.38C1221.93 525.9 1231.5 518.64 1244.78 518.64C1265.78 518.64 1280.75 536.55 1280.75 560.48C1280.75 584.41 1266.08 602.01 1244.78 602.01C1231.35 602.01 1221.93 595.37 1218.53 585.8ZM1239.68 587.96C1254.19 587.96 1265 577.31 1265 560.48C1265 543.65 1254.19 532.69 1239.99 532.69C1225.79 532.69 1214.67 542.88 1214.67 560.48C1214.67 575.92 1224.86 587.96 1239.68 587.96Z" fill="black"/>
            <path d="M1351.08 520.65L1327 586.41H1323.76L1300.44 520.65H1284.7V522.65L1312.64 600H1320.98L1312.19 623.08V625H1328.56L1367.14 522.65V520.65H1351.08Z" fill="black"/>
        `,
        grid: `
            <path d="M0 200H2362.5" stroke="black" stroke-miterlimit="10"/>
            <path d="M0 400H2362.5" stroke="black" stroke-miterlimit="10"/>
            <path d="M0 600H2362.5" stroke="black" stroke-miterlimit="10"/>
            <path d="M200 0V800" stroke="black" stroke-miterlimit="10"/>
            <path d="M600 0V800" stroke="black" stroke-miterlimit="10"/>
            <path d="M1000 0V800" stroke="black" stroke-miterlimit="10"/>
            <path d="M1200 0V800" stroke="black" stroke-miterlimit="10"/>
            <path d="M2162.5 0V800" stroke="black" stroke-miterlimit="10"/>
            <path d="M800 0V800" stroke="black" stroke-width="0.5" stroke-miterlimit="1" stroke-dasharray="5 5"/>
            <path d="M400 0V800" stroke="black" stroke-width="0.5" stroke-miterlimit="1" stroke-dasharray="5 5"/>
            <path d="M1200 350H2162.5" stroke="black" stroke-width="0.5" stroke-miterlimit="1" stroke-dasharray="5 5"/>
            <path d="M1200 375H2162.5" stroke="black" stroke-width="0.5" stroke-miterlimit="1" stroke-dasharray="5 5"/>
            <path d="M1200 425H2162.5" stroke="black" stroke-width="0.5" stroke-miterlimit="1" stroke-dasharray="5 5"/>
            <path d="M1200 450H2162.5" stroke="black" stroke-width="0.5" stroke-miterlimit="1" stroke-dasharray="5 5"/>
            <path d="M1200 525H2162.5" stroke="black" stroke-width="0.5" stroke-miterlimit="1" stroke-dasharray="5 5"/>
            <path d="M1200 575H2162.5" stroke="black" stroke-width="0.5" stroke-miterlimit="1" stroke-dasharray="5 5"/>
            <path d="M1200 500H2162.5" stroke="black" stroke-width="0.5" stroke-miterlimit="1" stroke-dasharray="5 5"/>
            <path d="M1200 475H2162.5" stroke="black" stroke-width="0.5" stroke-miterlimit="1" stroke-dasharray="5 5"/>
            <path d="M1200 550H2162.5" stroke="black" stroke-width="0.5" stroke-miterlimit="1" stroke-dasharray="5 5"/>
        `,
        width: 2362.5,
    }
]

let curLogo = 0;
let seed = logos[curLogo].seed;
let curShapeIndex = [0,0,0,0,0,0,0,0];
let shapeIndexes = curShapeIndex;
let timeouts = [];

const shapes = [
    '',
    'M0 0 L200 0 L200 200 L0 200 Z',
    'M200 0 L200 200 L0 200 Z',
    'M0 0 L200 200 L0 200 Z',
    'M0 0 L200 0 L0 200 Z',
    'M0 0 L200 0 L200 200 Z'
];

const regMark = {
    id: document.getElementById('regMark'),
    d: 'M962.5 218.75C962.5 208.35 970.4 200 981.03 200C992.19 200 1000 208.26 1000 218.66C1000 229.06 992.27 237.5 981.21 237.5C970.15 237.5 962.5 229.24 962.5 218.75ZM981.21 233.23C989.73 233.23 995.44 227.1 995.44 218.66C995.44 210.22 989.65 204.35 981.04 204.35C972.96 204.35 967.08 210.39 967.08 218.75C967.08 227.11 972.96 233.23 981.22 233.23H981.21ZM974 209.06H982.69C986.64 209.06 988.92 211.28 988.92 214.04C988.92 216.62 986.99 217.95 985.06 218.04V219.55C987.26 219.55 988.84 221.24 988.84 223.37V228.26H984.54V224.44C984.54 222.75 983.49 221.86 981.55 221.86H978.3V228.26H974V209.06ZM981.56 218.13C983.49 218.13 984.46 216.71 984.46 215.38C984.46 213.96 983.5 212.71 981.56 212.71H978.31V218.13H981.56Z'
};

const resetSymbol = () => {
    seed = logos[curLogo].seed;
    generateSymbol();
}

const randomizeSeed = () => {
    seed = Math.floor(Math.random() * 100000000).toString().padStart(8, '0');
    generateSymbol();
}

const updateNoInputs = (shapeArray) => {
    for (let i = 0; i < shapeArray.length; i++) {
        const inputField = document.getElementById(`no${i}`);
        if (inputField) {
            inputField.value = shapeArray[i];
        }
    }
}

const updateNoInput = (shapeNo, i) => {
    const inputField = document.getElementById(`no${i}`);
    if (inputField) {
        inputField.value = shapeNo;
    }
}

const updateAllNoInputs = (shapeNoArray) => {
    for (let i = 0; i < curShapeIndex.length; i++) {
        updateNoInput(shapeNoArray[i],i)
    }
}

const generateSymbol = () => {
    timeouts.forEach(clearTimeout);
    timeouts = [];

    shapeIndexes = Array.from(seed).map(s => parseInt(s) % shapes.length);

    updateAllNoInputs(shapeIndexes);

    const changePath = (shapeIndex, i) => {
        if (curShapeIndex[i] === shapeIndex) return;
        curShapeIndex[i] = (curShapeIndex[i] + 1) % shapes.length;
        const pathElement = document.getElementById(`m${i}`);
        pathElement.setAttribute('d', shapes[curShapeIndex[i]]);
        if (i === 3) regMark.id.setAttribute('d', curShapeIndex[i] === 0 || curShapeIndex[i] === 3 ? regMark.d : '');
        
        const timeoutId = setTimeout(() => changePath(shapeIndex, i), speed);
        timeouts.push(timeoutId);
    };

    shapeIndexes.forEach((shapeIndex, i) => {
        const timeoutId = setTimeout(() => changePath(shapeIndex, i), stackDelay * i);
        timeouts.push(timeoutId);
    });

    updateNoContent();
}

const downloadSvg = () => {
    const svgData = new XMLSerializer().serializeToString(logoElement);
    const blob = new Blob([svgData], {type: "image/svg+xml"});
    const url = URL.createObjectURL(blob);
    
    const downloadLink = document.createElement('a');
    downloadLink.href = url;
    downloadLink.download = `${logos[curLogo].name}__${seed}__.svg`;
    downloadLink.click();
    
    URL.revokeObjectURL(url);
};

const updateNoPosition = () => {
  const block = logoElement.clientHeight / 4;
  for (let i = 0; i < 8; i++) {
    document.getElementById(`sNo${i}`).style.left = `${block * (i % 4 + 1)}px`;
  }
};

const updateNoContent = () => {
    document.title = shapeIndexes.join('');
    updateUrlWithSeed();
    document.getElementById('rawSeed').innerText = shapeIndexes.join('');
    shapeIndexes.forEach((v, i) => {
        document.getElementById(`sNo${i}`).innerText = v;
    });
}

const generateNoElements = () => {

    const div = document.createElement('div');
    div.textContent = seed;
    div.classList.add('rawSeed');
    div.id = `rawSeed`
    div.style.fontSize = 'min(.625vw, .75rem)';
    div.style.lineHeight = '1em';
    div.style.position = 'absolute';
    div.style.left = '0px';
    div.style.top = 'calc(25% + .25em)';
    logoElement.parentElement.appendChild(div);

    shapeIndexes.forEach((value, index) => {
        const div = document.createElement('div');
        div.textContent = value;
        div.classList.add('sNo');
        div.id = `sNo${index}`
        div.style.fontSize = 'min(.625vw, .75rem)';
        div.style.lineHeight = '1em';
        div.style.position = 'absolute';
        div.style.transform = 'translateX(-50%)';

        (index < 4) ? div.style.top = '-1.5em' : div.style.bottom = '-1.5em';

        logoElement.parentElement.appendChild(div);
    });
    updateNoPosition();
}

const changeLogo = () => {
    const logoGroup = document.querySelector('#logo--wordmark');
    const val = logoPicker.value;
    logoGroup.innerHTML = logos[val].wordmark;
    curLogo = val;
    seed = logos[val].seed;
    logoElement.setAttribute('viewBox', `0 0 ${logos[val].width} 800`)
    generateSymbol();
    toggleGrid();
}
const toggleGrid = () => {
    const gridGroup = document.querySelector('#logo--grid');
    if (gridToggler.value === '0') {
        gridGroup.innerHTML = '';
        logoElement.parentElement.classList.remove('showGrid');
    } else {
        gridGroup.innerHTML = logos[curLogo].grid;
        logoElement.parentElement.classList.add('showGrid');
    }
}

const getValidNumericQueryParam = (paramName) => {
    const paramValue = new URLSearchParams(window.location.search).get(paramName);
    return paramValue && /^\d+$/.test(paramValue) ? paramValue : null;
};

const updateUrlWithSeed = () => {
  const newUrl = `${window.location.origin}${window.location.pathname}?seed=${seed}`;
  history.pushState(null, '', newUrl);
};

const handleSeedQueryParam = () => {
    let querySeed = getValidNumericQueryParam('seed');
    if (!querySeed) return;    
    querySeed = querySeed.padStart(8, '0').slice(-8);
    seed = querySeed;
    generateSymbol();
};

generateNoElements();
changeLogo();
handleSeedQueryParam();
logoElement.addEventListener('click', randomizeSeed);
resetBtn.addEventListener('click', resetSymbol);
logoPicker.addEventListener('change', changeLogo);
gridToggler.addEventListener('change', toggleGrid);
document.addEventListener('keydown', event => event.key === 'Enter' && randomizeSeed());
downloadSvgElement.addEventListener('click', downloadSvg);
const resizeObserver = new ResizeObserver(updateNoPosition);
resizeObserver.observe(logoElement);
