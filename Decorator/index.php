<?php
    $hello = new Hello();
    $birthdayHello = new BirthdayHelloDecorator($hello);
    $birthdayHello->sayHello("Aurélien");