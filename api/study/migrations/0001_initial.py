# Generated by Django 3.1.1 on 2020-09-14 07:08

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Students',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=10)),
                ('address', models.CharField(max_length=50)),
                ('email', models.CharField(max_length=30)),
            ],
        ),
    ]
