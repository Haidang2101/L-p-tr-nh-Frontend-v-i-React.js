 createUser = (name, age, role) => {
            if (!age){
                age = 18;
            }
            if (!role){
                role = 'user';
            }
            console.log(`Name: ${name}, Age: ${age}, Role: ${role}`);
        }
        createUser("Dev");
        createUser("Alice", 25, "admin");