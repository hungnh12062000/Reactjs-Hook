- useEffect là một hook trong React Hooks cho phép chúng ta làm việc với các lifecycle ở functional component. Có thể hiểu đơn giản rằng useEffect Hook là của 3 phương thức componentDidMount, componentDidUpdate, và componentWillUnmount kết hợp lại với nhau.

- useEffect() là function nắm bắt tất cả các sự thay đổi của code. Nó được khởi chạy khi giá trị của một biến nào đó thay đổi, hay component đã được render ra, như gọi API, cập nhật DOM, đăng ký hoặc hủy đăng ký sự kiện, vv.

- useEffect được gọi mỗi khi component được render lại hoặc khi một dependency trong mảng dependency thay đổi. Dependency có thể là một state, props hoặc bất kỳ giá trị nào được sử dụng trong effect.

- Để sử dụng useEffect bạn cần phải import nó vào trong component cần sử dụng:
  => import React, { useEffect } from 'react'

- Cú pháp:
  => useEffect(effectFunction, arrayDependencies)

  - effectFunction: Hàm được khởi chạy
  - arrayDependencies: Mảng chứa các giá trị thay đổi

- Ví dụ:

<!--
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Thực hiện các tác vụ side-effect ở đây
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
} -->

- Trong ví dụ trên, useEffect được sử dụng để cập nhật tiêu đề của trang web với giá trị hiện tại của count. Mỗi khi count thay đổi, useEffect sẽ được gọi lại để cập nhật tiêu đề mới.

- Trong mảng dependency [count], count được chỉ định là dependency của effect. Nếu count thay đổi, effect sẽ được gọi lại. Nếu không có dependency nào được chỉ định, effect sẽ được gọi mỗi khi component được render lại.
