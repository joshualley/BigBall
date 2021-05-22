use bigball;

select row_number() over(order by id) as seq, id from User


