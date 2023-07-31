```rust
use std::ffi::CString;
use std::os::raw::c_char;

// Wrapper for Unity's GameObject
pub struct GameObject {
    name: CString,
}

impl GameObject {
    pub fn new(name: &str) -> GameObject {
        GameObject {
            name: CString::new(name).unwrap(),
        }
    }

    pub fn get_name(&self) -> *const c_char {
        self.name.as_ptr()
    }
}

// Wrapper for Unity's Transform
pub struct Transform {
    position: (f32, f32, f32),
    rotation: (f32, f32, f32),
    scale: (f32, f32, f32),
}

impl Transform {
    pub fn new(position: (f32, f32, f32), rotation: (f32, f32, f32), scale: (f32, f32, f32)) -> Transform {
        Transform {
            position,
            rotation,
            scale,
        }
    }

    pub fn get_position(&self) -> (f32, f32, f32) {
        self.position
    }

    pub fn get_rotation(&self) -> (f32, f32, f32) {
        self.rotation
    }

    pub fn get_scale(&self) -> (f32, f32, f32) {
        self.scale
    }
}
```