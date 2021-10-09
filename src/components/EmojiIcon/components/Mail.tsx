import React, {FC} from 'react';

const Mail: FC<React.HTMLAttributes<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="48"
      height="49"
      viewBox="0 0 48 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <path d="M0 48.36H48V0.36H0V48.36Z" fill="url(#patternMail0)" />
      <defs>
        <pattern id="patternMail0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#imageMail0" transform="scale(0.015625)" />
        </pattern>
        <image
          id="imageMail0"
          width="64"
          height="64"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAJm0lEQVR4Ae1ahW4rzRk9O147cRxmvMHL/N8KSo/RtymL+hYVS32IMlOYmcFxODGsFzpnk5Gi0Xpu4ltFTa8/aeXZ8dA589GMbeErlgCwrQBftwhUCKgQUCGgQkCFgAoBFQIqBHylYqtC5vCoMR6PJWOxGO4jQRBAiWVZeEjR1sD5WeZnyTZ+4KNQcB0ARyEB6XQG8bj9g3zW+ZElRJ0QARs/JgL0tUSvn8QIAc8LkCu4+YRt/aqtpennVi6Xsw8O0r+5yrvfb2hoQLIqBjsm9EEevXBvrsF7ODo5geU7WwP9T97bhUIhZduiJXtxAl+CDkhCQsC2Yw9CQhlqrtV9XoTs43o+shL82dkFjtJ76OvtCuTmJ205iEgkqvyGhnrs7e8h8CUJjZKEIIAkJnyHptoPT0z5c5Owoush53i4vMxic2MVXe0tqK2t86UEtmwQUGpra9Ha7GBndxOwngBSE6oVCRGTPgYTIXjP88Kdz+YKWFlaQHNTHTo7O8P1CyFgKzCSDTQ1N8NxCthaX4E1OIKgrhbVkCTEQnN4ENWO8uLl27wX2ny+4GJhfga1yQQGBgbgcw49DFJIQntHBwpOEauSreGnL4C6FKrjuHaMgL7IcolRY/BTf1dlnaB7gXfda5t3ih5mZyYQjwHPnj2Dvn5bB8DXnp4eOI6DxYUZPH/xBkGqBlXxQA4iyJ4ZePnhSr2XPT67CIL3feTyErwbYGZqAr6bx4d3n8Ach5t8m0xRanH9/f1oqKvB3MwkrrI55It+6Eys6zZf9JQhdxrXsgJ4N+Bdj+DHkbs6w/v37xBPJDTwigCDeg4NDSNVUyUHGkMuV0DeMZKgLfZhH0CCZ6jLF+H6wPT0BM5ODvHNx49IJmvge14koeL2i7I1xRJVhnZTnbAxPTGKXMGhJkh2vSigZJjPw4OXjwLvBQIz05NI723j06dPqK2rC51hKRFRdqjqCCYWs/Hy5QvERIApSULBcZFzFAlmNX8oAjyf4F14iEmHN4VtGeu/JcE3NTURvNHPCJNToiYQZDyewOvXrxF4DibH/03PSnOgp2WfyF3/vCaU1Z7tbmkaP2nzLnzEsDA3g7Xlebnz36CtvR2u6xr9CUVE7Fpkh6qqKrx7+xZO/irUhKIbkIQbhvWFleUYjaB1kgC+hwcb+JaNpcU5LMxO4aO0+e7ubq5L20hEzimiWCnFWnUyKT3qe2QvTjE9OQbPt5AvXtsfDAsu92H/6LFugYfNDE+uZ5TentHLqPZ6vTAAjqxLpVJ4/+E9To/T0tOOwQ9E6Bi9a5WMJIGPmZToPibVZ3YXWDbWVpcxPvoPvJEmOjQ0RPD62o0kC7NKRpNQX9+ADx8+IHOwi1kZboIghoLDxcm+vq+DNpJiICiSDAQ0PU+Cj2NzfQ2j//wLXr54zmilq3wkCXrZNqh/ZB0H54IaGxvxQZrDv0b/HR4qXrx8g0LRRcIGrl0n7pvKGklX3QtuAIgEdrY28Pe//lECH8HLV6/02yBV/my2aRszNMOiSEJzSwvev3uP0dFRCCFzhhevJAkFSUL0DmhEGufUwbMpU1srVoXd3R385U+/w8BAP968eVsSvFEUAXdpFPWpNKFdhpu3b95gdGwcrufiuSTBKbqI26p/5F3dvQln1AlEApsb6/jLH36Dvr5emiGTtWgtM5Ou2ho1gHV3Om93dHWhL3OIuZkJ1Egn2dv7BL7rIiGAwJBnmAjhmxW2gSSU4OPIHKbxtz//DslkVQjetm1uAk1Q35zP4VGYzT5Al1JO8vTkBG2tbRgcHMTW9g62t4Dunj44gYt4SEKkGO2T4Ineudn59MEBVhdn8b3vficEfHV1herq6pAE89WZGYt93+OrXj4/P0c+nw+TD94qMWFaWFwKF9nZ1YPAK8IW7KOrn5kMWErt4zjKZLC8MINnI8MYHhkJj+qbm5s4PT1Fc3Oz0gAlRj+ga4e4ayISVU/w2Ww2BF9TUxMurK6uHk/lQk8y+zjY34UHG0UPwN1Oi6oFXAmeSc7JySmW5qcwPDSA/oEBFAoF2n14Z1EsFuX3J5FrNGHSM8GycvWLiwuqIe/XwuRI5d1sxzxheHgQmYMdHErV9UMSAj1bjM4X/PCMQeIkwRdYnJtC/5NeDAwMqgyPn9Q0dXFDTeAYZR3GhKmxEp2Ey8tLPmEEIHjuhBK1wMbGJgwNDuBgbxOZzOGNJpgPPuHO+wE8Ky7JzWJ+bhLdXe2SzGHVB0pIOEno6uqiCeok6O3NqbDesJQZULjr3P22tjbUaWdt1UeRwDxhoL8Pe1vr16oqgfF+Hog+0/MWh0Tx8mVudhJtLY14+vQpPC8aDElIJpOKBJydnd37lGmX2vEoULR3TtLa2krwSu1NyZIkqh2e62F9YxnACBobGuV7ATHrOsSprLHoA5ZISCAOZmfG0VhXgxfPX4TpNaXUJSy1jyR0dHRgf3+f7bi2uydCpvz/dl0ulyN4el1p4/VR4CNjMUnokH7CD3xsrC0h39mLVklKiN6/uVSxYoAQOD05xao8zzfUp/BKHm4sISLjPEUngU6YJplOpzk3I9KdMkLbFJNVnVIv5v/8/ZDgI/oYme7q6g5j9srKmrTXYzRIH8G7OoIjueenJzLR2UNPd6fM75+znuAjAZQyB/ojamcmkwFFkRCVeBlTYU6shGGHDoa7rq6YDMCNZNIcalO12NndxcHOBo/Qyl/IXa+T54q3BKA0516/DbANSaD6s3x0dMT21AxdE8ypsCqzAcHTeXFQqr4Cf5/d182BlyojIyMyXe5FLpuVJHgyo0tyoYzvnEP1KSs1Jwlq54+Pj1lHH1HyBxc7KsWlqPhKtdJ3/kt/FFFXbExl1aGKdTp481zmjJUkcFxi4Hic63YbNacdkTqSRXYkc9x5NjaDL5+Iu/zjo+yxqbkqXedYJF3XAhEVv+nw2Jjg9UztIeVLNY3rpu8iESSBWq2PK9TLbfD01gSvQP+viiFn0UmgKZMEhszoKzE2ZJYnhCB4PRo8KhKiviMJKo1nmThVImQBsBiLWcFYr7Th0YnBbLiZyidwo1lmnS2Z8KRtCAImM+qW5z4TmS8ioeqMZUP4/G+RoDJEnmUY4oX0c5YtM7sraRubMky8kmQYwJengqbvWS4HiPni0xhVbkcDV4b3K1secLyWlpZf8B9TUiWaLSns8wj+/1NOW+uGjEtp6r+UmnBmraysqHzfTiQStfj/Ftq9JbU8R8h85/8EFUuuDBGnlT9Lfy1SIaBCQIWACgEVAioEVAiwAsAG4OIrlf8AZyYcCMBJ4rMAAAAASUVORK5CYII="
        />
      </defs>
    </svg>
  );
};

export default Mail;
