function calcEccentricAnomaly(currentAnomaly, eccentricity) {
    currentAnomaly = (currentAnomaly * 180) / Math.PI;
    let anomaly = getAnomaly(eccentricity, currentAnomaly, 9);
    console.log(anomaly);

    function getAnomaly(ec, m, dp) {
        // ec = eccentricity
        // m = eccentric anomaly
        // dp = decimal points precision
        let pi = Math.PI;
        let delta = Math.pow(10, -dp);

        m /= 360.0;
        m = 2.0 * pi * (m - Math.floor(m));

        let e = m;
        let f = e - ec * Math.sin(m) - m;

        while ((Math.abs(f) > delta)) {
            e = e - f / (1.0 - ec * Math.cos(e));
            f = e - ec * Math.sin(e) - m;
        }

        return Math.round(e * Math.pow(10, dp)) / Math.pow(10, dp);
    }
}

calcEccentricAnomaly(0.25, 0.99);