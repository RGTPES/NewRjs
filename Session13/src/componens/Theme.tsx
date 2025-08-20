import React, { PureComponent } from 'react';

interface Props {
  theme: 'light' | 'dark';
}

class Theme extends PureComponent<Props> {
  render() {
    const { theme } = this.props;
    const isDark = theme === 'dark';
    return (
      <div style={{fontSize:'50px'}}
        
      >
        Nền: {isDark ? 'Tối' : 'Sáng'}
      </div>
    );
  }
}

export default Theme;
