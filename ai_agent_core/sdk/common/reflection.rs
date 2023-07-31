```rust
use std::any::TypeId;
use std::collections::HashMap;

pub struct Reflection {
    pub types: HashMap<TypeId, &'static str>,
}

impl Reflection {
    pub fn new() -> Self {
        let mut types = HashMap::new();
        types.insert(TypeId::of::<i32>(), "i32");
        types.insert(TypeId::of::<f32>(), "f32");
        types.insert(TypeId::of::<bool>(), "bool");
        types.insert(TypeId::of::<String>(), "String");
        // Add more types as needed

        Self { types }
    }

    pub fn get_type_name<T: 'static>(&self) -> Option<&'static str> {
        self.types.get(&TypeId::of::<T>()).copied()
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_reflection() {
        let reflection = Reflection::new();

        assert_eq!(reflection.get_type_name::<i32>(), Some("i32"));
        assert_eq!(reflection.get_type_name::<f32>(), Some("f32"));
        assert_eq!(reflection.get_type_name::<bool>(), Some("bool"));
        assert_eq!(reflection.get_type_name::<String>(), Some("String"));
        assert_eq!(reflection.get_type_name::<Vec<i32>>(), None);
    }
}
```