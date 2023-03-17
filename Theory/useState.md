Việc sử dụng React Hooks cho phép sử dụng state, hay các tính năng khác của React trong một functional components mà không cần phải viết một class component.

useState

- useState là một hook cho phép chúng ta quản lý các state trong một functional component.
- Để sử dụng useState, trước tiên chúng ta cần import nó vào component.
  => const [nameState, functionUpdateState] = useState(valueDefaultState);

  - nameState: Tên State
  - functionUpdateState: Hàm thực hiện để cập nhật State. Giả sử mình muốn cập nhật giá trị của state mình chỉ cần gọi functionUpdateState('giá trị mới của state').
  - valueDefaultState: Gía trị ban đầu của State

- Trong Class Component: state được khởi tạo đó luôn luôn là một object, chúng ta chỉ có thể lưu trữ giá trị trong object đó.
  - this.state = {
    website: 'freetuts.net'
    }
- Nhưng với hooks, chúng ta có thể lưu trữ bất cứ kiểu dữ liệu nào trong state như object, number, string,....

  - const [website, setWebsite] = useState('freetuts.net');
  - const [isLoading, setLoading] = useState(false);
  - const [count, setCount] = useState(0);

- Ví dụ:

<!--

import React, { useState } from 'react';
function MyComponent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

-->

- Trong ví dụ trên, useState được sử dụng để khởi tạo state count với giá trị ban đầu là 0.
- useState trả về một cặp giá trị, được lưu trữ trong biến count và setCount.
- count được sử dụng để hiển thị giá trị state trong phần tử p, và setCount được sử dụng để cập nhật giá trị state mới khi người dùng click vào button "Increment".
- Khi setCount được gọi, React sẽ tự động cập nhật giá trị state mới và render lại component với giá trị state mới.
