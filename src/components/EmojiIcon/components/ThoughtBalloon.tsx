import React, {FC} from 'react';

const ThoughtBalloon: FC<React.HTMLAttributes<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="50"
      height="51"
      viewBox="0 0 50 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <path d="M0 50.5H50V0.5H0V50.5Z" fill="url(#patternThoughtBalloon0)" />
      <defs>
        <pattern id="patternThoughtBalloon0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#imageThoughtBalloon0" transform="scale(0.015625)" />
        </pattern>
        <image
          id="imageThoughtBalloon0"
          width="64"
          height="64"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAQg0lEQVR42u1bWUyc1xXGcdJETZwmD0nURo0aVWmkKi+JKrWRKrVKlSpKlS6RorQPjdqH1o3TNo68YmMTVrOD2Xezw7AOw74O67BvBsy+2RiwzWAwqxnD6fnO6O9kim0YM+OkyFe6Amb+5Z7vnPOd5V7sHo1Hw/YjISHx+cys7D8mp6b5p6rSo5JTUqOSk1NcExKTPlKlZ7y4p4VXqTJ+mZmZlVSprZpva++g3r4+6r3URx2dXVRTW3ezqLhErc7V/EmlUu2/2/0tLa2PV1fXPFNXV4fv/39Gc3Pzk1nZapfauvq10dFxunFjlhYWbtHy8jKtrKzQ0tIyLdxapOmZa9TOwLCFZGRkZL6Ce+vq699uaWk52N3dE9nX1187MDDY3dt7qaapuTmivLzikEaT94tvlLCFRUXPFRUXf6+0tPSl/Lz8J/AZazVK19BEM9eu0+LiIq3dvk0Gg4Hu3Lkj03DHQOvr67S6tsagrNDY2DgVFBZdbGxq1vDva9dmrtPczXm6xffie/yc1c/RKF9XV6+7k52jTud3vvE1+XTSY1nZOW+y+R6uqq7ObWho7GtuaZ3U6RomtNqquvz8grz8/EIaHh4RjW9ubm6ZGxsbDAhAMIhlTFy+QlNT07TIVnGbwQI4Bv4O1yhTAFtdpfmFBRoaGiF+/1R2ds6HD1X49PSMt3M1eXldF7uXrkxO0uwsTHuBtbwE0xZtX2OtT05e5UUO02UWDCAYDKx5FhrTwBbAgrP2b9NN1vLA4BDp9XpiXBRw7jthQQBpht2nvKJyraam9l2bC15fr9uvycs/w9pemJ6ZYR9eojXWhqItxbwVDeN3CKjXz8H/2YT5+jVcK1rn+9bFtNm3aWLiMinjfy0FY+t3JhCmp2fgOsPd3d3ftaX88OnQpuYW1thNvBgCm2nlHguHtiE47sGi+VrT9zfYelrb2mmZLceSoYAAIEGmnV0XKb+gwM9mwudqNJ9XVFYBbZDWFoEfdMA6EAUgCJ5iKQhQwhJb0eUrk8SkuMBW+qrVhddqta/nFxTOXerrZ43pWZvQ5AaWQLscTGhrLMCyACCgWg6A3H/t+g0qr9QSM+9hqwPAbB+lra6R8HOdfRmIw6yxAGsMPEsIUnGn7a0K3+N6Ca23OGog1OoamygmJrbcqsKXlpUdYAAG4Psjo2PyogWEqfV1LMBqIGz8NzpgIk+Qv8EXmFsiwLrBAOHF/+fmbtLk1Slq7+ik0LDw1Qtx8fE5Oeq/5qjVz+4agEqt9jV1bp6+uaWNBodH5EV6fiGsYI1ZHJrbsCIIAADPxFyXuG+aAB2RA24D0kTYnZ9foOts/sghWphMwyMiqbComBobmxEZdFxn/GZXAKSkpv1MlZG5Xqdr4Py9n8YmJmAFkqEtMvoS1gCCNaxhEyAgfAoILLABzwfpitArK6sIm9A6hJdkaNZIouKejWyl/gGBxHxFV6emJbwWl5QuswwfPzgAKanvJSalUFV1LYeabhoeGYUVgAzhClgYNAVz3TUIpqgC/96EK0DrAsLKqgjPoC8hJUbmiARK1jE1PQP3BAcAAEQDfCZZJYi7sLj4Fofwdx4IAC48Po6NiydtVQ0AUIgQwmNBWBwAsIoFbE2VN7+SMcLsRfsgPWhfAJhlACAoFFOva6T4hCQqK6+ASyAysCVMIc8AKLVcQO1/gAiQ/UFEVAwhB+jrH6DxicsAAS9AGopFwDRhstbSvjkICHUbsATxfYDOAIjvMxfNScp9hXOA/oFBWAALX0lt7Z1YJ9YnIAxyOl5QVLzJJbnlfKBKT38rLCJqpaSsXEBgU2J3qKERRhzsi8IEPquIbgsAJDoYJJsE2OL/N+fnkV6L9sfHLwsAXJtgoq5AYgRuAF9Jlcm9COImTJjlUaBS+4KXt8+Ij68fxcRegDkBfTFPKw0IuiMAEPaUxAk8ABCQSnNdAitgICYgLOoKmD4AwE9xD+QxSSmpOQ/EA17e3pVcAcrLtgxbA2DOBQDBLDIYOcEcjKtM0ogCqEYBBoiwuLSM4hISNJZ3dVpa3uU6fxovwnjYAGBKaDQmQKYkSUKlgKK4BhPzLZAiABDB0YUaGBii5tY2SkvPpMjo6CSLhOf201vczpqByRuMsd5WAFgwv3qf3Ku4B6wBxZUI38ta7+G+I3qQ4K+gkDBKU6n+smPhh4aGnmKyawKZoMkBFgYANraCewJyvwE3QShGhIAb9PcPSDaYl18gvh8eGU0B5wPr2zs6ntp580OnO4zcGmkv4q9Sre1SyF1ZxXYDroJUGVkq1g7S9vbxxWwvr6h4c8fC9/T2vsjxdBLZlV4PAFaBsFL8WNPMrQqAUiFireAEhMOQ0LC1wsLCX1nk+1VV1e/pGhoJ/T4AgLCDvFxJd63k0zawAKkkYQWIDLAE5Acb1TW1CQMDA8/vGICSklL3ppY25PwgFZALHoqHKynvPRdqXrpumk0LO0gWA2YslTfAV1IzzOqNaTK32Yl7marx8fHHtxWeG4v7uIwsaWX2BAEirCDpQDFiKnpM0yS0vNx8ml1nBpztAOAJvoLVIlOdmpY6AVUhcVL3r20BiIuLf5pr6E6klAgnqLVReOCBxo0NxGFzEJSYrEzza2Tx1ogOO7YAAAAOQPiWVHh8QjLYrKyc0ba2thfuC0BQcMizScmpPe0dXSh6kE4CSeTfeCjMa0sycrepCE+EafNhDoBBqkfwABSIwkj2IrmzRbz1dmS78veJNFV6AxogQ8YOEMpfoAkuQPpp1qXBy0yCywK28MTXBQCUhrwAlWsPN0fYsyksPCJjBxVgRmxJaTlyaKAHKwChoAkBVwAIcAcQo4AgJm8ye1tmivf9zgSApMcgQjRMWIYJ6mSXLiopI18//9JtAeCW0ifZ6lxq6+iEFXA4vIq6W9pP8wwCLAHuAJQlOthaePN5D+HNOQAAYOcKJTNK9xauB3I1+eTm7rF917iurv712Avxq9U1dWw6feACcYUZIwiwBJgXgAAIQBwvvtvirCa8wimm55qBYsZJUAoUpLTL+/sHqaa2npjbiEv73G0BGBsd3Z+apkpSpWei0yquMMIgwBLgDuAE5AcKL8AdFACwUBClBRsn25r31s1Rc82bhDd1jpR2OUJ5e2cXzJ/rgSDuGkfsrCnS1dX1Iy4i5sEFyAlgCUPDowgpAAJNR4UckSPg5bAGtMjAE1iopQR2t4LILNRuDb8mwRXNw/RRFCF0ozeATlFVTS1BmW7u50ij0fzebqeDd8APoR9YWl7J2VSLcMLF7l7uDQ6iCwsgEGbgEqgXwBNgXLiHsktsAQDmApo+E+GUqHPXkKt0jpW2OdaDtYC/6jmlz1FrRPs+XBT19vY+aWfJ8Pb29QwNjyR1XgFVaKuptr5BwECe0MfoKhYBjkCowUvhe+AFywFQhBJB5e91o0ljQsgtE58r7XI0RGD2sM6BwWHC6ZTsnFyK4HLY4YwjsULRD7B8hIWH//t8UPBIVMwFysnNE38qq9ACXQHCeODpIlUyQDA5RArpH2zuuHAy82FFMBFuSY7GiIBLi7IhIgDLvgC7HwRGum5sgU+DsGGlaOOL2YeGR9Cp02d4yywsdnfb47m5P4iMig53cna9ExgUQnzcjTKz1VRUXMrt6Ga2jioGR8OEOSA9hFXsIG+z22sevkw9P5gyfBghTOaskC6ERT6Cdrf0+8bZ3eCKaHuDqEF2sND8giK6EJdAPn4BZH/KgQICAhNGRkaesdvt0Ol0rx45emzp4D8+pbOOThTMbaaEpGTKLyyijKxsSlVl0MWeXmgDQij7htsWL0ryAhIDoYLBwS2wJggI98K5BAiOfh8+AymDk2DmIDlshmjYTeMSEsnH158cnZzppP2picDAQAc+t/SYnTVGXl7+D13dPfTOru5iVq5u5ygkLJxSUlVAHLsySDjACeIGsnkKYlMqwXsIr2yBKcIjkoBMK6uq0dODWSOcyWfDI2PU3XMJmyBifalp6RQdE0vnA4N5Pe7k5OQ87eLiWhQSEvrPwKCgV+ysORKTkr/j6e3TFxgcQrxZQswL5H8+UEgmKCQUeTYSDhChJCA3GQRYwrrSTDG1uDEVdjcTnn2bw+sNIVTORbAnic4OQEBZC6uQtLaOTT0rR03hvA4PT286edKeDn322aZarbbtiTHef0/w8vGjWNZ4dGwcAQy/gECkmOTp5YOCQ9lDBBuDD5RdZJi4TCE5mUJ2IvyiUXjk7mJByEKx1Y2tLoAxODwMIGR7rpv/bmpp5fBcIRaAKOXC2j9+4qS+pKTkZZsCwNtLH7iw6SM/uBCfCEuQHdkzjl/SCdZCIqeb1bV11NXdIxq7YqomZUNVmbeWliA0Jk6PwWUAFvs47+iykLyLw4VLAI69IMJAcOQfIFm0u0F48H/s+VF8YjI5u7iRo+OXzTU11U/aFICa2tp9EZFRvm7nPEX4SPa/4NBwWcCnhz5j5vWnLHUuiAkkJYsem7gMa4Bb8LwBVkdNAYGVySDpmeymISjMHv6MZ0nu0drWAb+HJUD7QrRdF3uYb9oZoCoGK01IOSoq+oTdwxjcYn7C3z/AnoXWu3t4coHhJ4T4+eEviKOEAJOemYXtKGgJLgGtghtQU6DEBqnB1PETf4u1oAulZeGjomPp2PETsDLkHNj2xo6v2WRQkJDxO8qhAA53p/Ucpb5v9zBHSGjomx6eXk6cY2dy2OnkbGuYARh1ZG2EMCEmshnz8Rqk0iBHLBjFFQQQs27n2cq/42QHLAbhFNxy9Nhx0WjMhXjKzMqh0rIKuBXHeB3ID89ChJDrI6Nj2ffZ9RKTDtroxHfrc01NTd/e7rr4hISn+TTJC9xTfMnb2+cTZ1c3PcgSCwQvYG8uKydXYnVeQRHPQlJr8vkzDb4TPw4IDOYw5jLv5uZewKS6CnJF9pmqSif0J3BvLk8+gc7XJ6G0heaXw8LCj9jgYGTen1tb29K5mdA/OjbW3tPTG8ZHZH+685CZ9HP2Y7XDWUdyO+eBrAz7c+IeEQxKOJs32Buf4TuQ6GmHs5Px8fG/xf3BwaHvsGXFO7u4Lrq4ukuoA6AQ2sXVjRwczq586eSUxf+I8WurCs67KPvSMzLOwh/B3DgAsba2hnycGbjvOluDRacsfH19/8DJSayTs4uOtTV39NgJOmF/ik45nOGocQq+zhnb6WH3cx4x3LB8Y0vYDQ39CT/juJeXVziuOevoGObk5HQ0NDQMyrDuyFHnPsb9wPf5LD5isnIIGpOzOmOtz+cFJysqKl6zOIlKSPyWh4fnj93d3T+2t7c/8re/Hzzr4HDmc/7s/eDg4JfsvgkjKTn57aTklGIUFojPAAD/1GBQmowcr43d1aIzdntxcHy3T05O1eNA5Jzx8BODAO1LlwXVmPy/T0FhYcKeBCAwKNglJjZusbu7F70/AWFBau9F0hsbDZLc8L5B+p4EgLeSP+KDBN2Iu0o7HEBAcCQsqLuR3PBZ3KA9CUBKauoBBuELhKqaunrk88i9MZF6IkvDaQscNfmd3V4dGZmZz3F2VxcSFsGJSh6VcMWFzjBKTyQqXA1Ga6u0j9vt5REREfkygxDFef6yP3dTff0DiH+/wbW/I/9v3wG7vT8kIhzw8/f/Kxc5Xuc8PV3PBwZ+yA2RfXaPxqOx58Z/AEreHLZZXHwhAAAAAElFTkSuQmCC"
        />
      </defs>
    </svg>
  );
};

export default ThoughtBalloon;
