/*
    Revisa las tablas Customers (clientes), Employees (empleados) y Orders (pedidos)
*/

-- ¿Cuántos clientes hay registrados?
select count(*) from public.customers;

-- ¿Cuántos pedidos?

-- ¿Qué clientes viven en London y su nombre (CustomerName) empieza por A?
select * from public.customers
         where city = 'London' and company_name like 'A%';

-- ¿Cuántos clientes hay que son de Londres?
select count(*) from public.customers
         where city = 'London';

-- ¿Cuántos clientes hay en cada ciudad?
select city, count(*) as total from public.customers
group by city
order by total desc;

-- ¿Cuántos empleados nacieron después de 1 de Junio del 1965?
select * from public.employees
where birth_date > '1965-06-01';

-- Hazme un informe que diga «El empleado N nación el N», siendo N,
-- nombre (FirstName y Last Name) y día de nacimiento (BirthDate)
select
    concat('El empleado ', last_name,
           ' de ', country,
           ' nombre: (', first_name,
           ' ', last_name,
           ') y el dia de nacimiento es: ', birth_date ) as informe
from public.employees;

-- Hazme el informe anterior, pero sólo para los empleados con id 8, 7, 3 y 10
select
    concat('El empleado ', last_name,
           ' de ', country,
           ' nombre: (', first_name,
           ' ', last_name,
           ') y el dia de nacimiento es: ', birth_date ) as informe
from public.employees
where employee_id in (8,7,3);

-- Dime los paises que tengan más de 5 clientes, ordenados por el nombre de país
select country, count(*) from public.customers
group by country
    having count(*) > 5
order by country asc;

-- Ejercicios con más de una tabla
-- Dime el nombre del cliente del pedido 10360
select * from public.customers
select * from public.orders

select c.company_name from public.orders o
    join public.customers c
    on o.customer_id = c.customer_id
where o.order_id = 10360;

-- Dime el nombre completo de los clientes con los pedidos 10360, 10253 y 10440
select c.company_name from public.orders o
    join public.customers c
    on o.customer_id = c.customer_id
where o.order_id in (
10360,
10253,
10440 );

-- Dime las ciudades y número de pedidos de clientes en esa ciudad
select c.city, count(o.order_id) as total_pedidos from public.orders as o
    join public.customers as c
        on o.customer_id  = c.customer_id
group by c.city
order by total_pedidos desc;

-- ¿Cuales son las ciudades desde las que hay más de 7 pedidos?
select c.city, count(o.order_id) as total_pedidos from public.orders as o
    join public.customers as c
        on o.customer_id  = c.customer_id
group by c.city
    -- aca va el having
order by total_pedidos desc;

-- ¿Cuales son los tres países desde los que tengo más pedidos?
select c.city, count(o.order_id) as total_pedidos from public.orders as o
    join public.customers as c
        on o.customer_id  = c.customer_id
group by c.city
order by total_pedidos desc
limit 3;

-- Necesito un informe con el Nombre completo de los Empleados y el número de pedidos que registraron
select e.first_name, e.last_name, count(o.order_id) as num_pedidos from public.orders o
    join public.employees e
        on o.employee_id = e.employee_id
group by e.employee_id
order by num_pedidos desc;

-- En el informe anterior, sólo necesito los empleados cuyo nombre comience por M
select e.first_name, e.last_name, count(o.order_id) as num_pedidos from public.orders o
    join public.employees e
        on o.employee_id = e.employee_id
where e.first_name like 'M%'
group by e.employee_id
order by num_pedidos desc;

-- Quiero saber el número de pedido, qué empleado (sólo el nombre) lo registró y el cliente.
select o.order_id, e.first_name, c.company_name from public.orders o
join public.employees e
    on o.employee_id = e.employee_id
join public.customers c
    on o.customer_id = c.customer_id
order by o.order_id;

-- ¿Hay algún cliente que haya hecho más de un pedido registrado por el mismo empleado?
select c.company_name,o.customer_id,  count(*) as num_pedidos from public.orders o
join public.employees e
    on o.employee_id = e.employee_id
join public.customers c
    on o.customer_id = c.customer_id
group by o.customer_id, c.company_name
    having count(*) > 1
order by num_pedidos;

-- Quiero saber los clientes que hayan hecho más de un pedido y que hayan
-- sido registrado por un Empleado cuyo nombre sea Margaret.
select c.company_name,o.customer_id,  count(*) as num_pedidos from public.orders o
join public.employees e
    on o.employee_id = e.employee_id
join public.customers c
    on o.customer_id = c.customer_id
where e.first_name = 'Margaret'
group by o.customer_id, c.company_name
    having count(*) > 1
order by num_pedidos;

-- Ejercicios con Subconsultas
-- ¿Cual es el producto con el precio mínimo más bajo? (usando subconsultas)


