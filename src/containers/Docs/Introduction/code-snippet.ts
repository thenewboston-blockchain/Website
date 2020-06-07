const code = `
from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models

from thenewboston.models.network_node import NetworkNode


class Bank(NetworkNode):
    trust = models.DecimalField(
        decimal_places=2,
        default=0,
        max_digits=5,
        validators=[
            MinValueValidator(0),
            MaxValueValidator(100)
        ]
    )

    class Meta:
        default_related_name = 'banks'

    def __str__(self):
        return (
            f'ID: {self.id} | '
            f'IP Address: {self.ip_address} | '
            f'Trust: {self.trust} | '
            f'Version: {self.version}'
        )
  `;

export default code;
