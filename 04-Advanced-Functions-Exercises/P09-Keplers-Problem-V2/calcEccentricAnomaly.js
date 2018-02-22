function calcEccentricAnomaly(currentAnomaly, eccentricity) {
    let pi = Math.PI;
    let precision = 9;

    currentAnomaly = (currentAnomaly * 180) / pi;
    currentAnomaly /= 360.0;
    currentAnomaly = 2.0 * pi * (currentAnomaly - Math.floor(currentAnomaly));

    let delta = Math.pow(10, -precision);
    let e = currentAnomaly;
    let f = e - eccentricity * Math.sin(currentAnomaly) - currentAnomaly;

    return getNext(e, f, delta);

    function getNext(e, f, delta) {
        if ((Math.abs(f) < delta)) {
            return Math.round(e * Math.pow(10, precision)) / Math.pow(10, precision);
        }
        e = e - f / (1.0 - eccentricity * Math.cos(e));
        f = e - eccentricity * Math.sin(e) - currentAnomaly;

        return getNext(e, f, delta);
    }
}

console.log(calcEccentricAnomaly(0.25, 0.99));