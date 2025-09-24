import React from "react";
import { Select, Input } from "antd";

const { Option } = Select;

const FilterBar: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-3 bg-white shadow rounded-xl p-4 mb-4">
      <div className="flex flex-col">
        <span className="text-xs text-gray-500 mb-1">Trạng thái</span>
        <Select defaultValue="all" className="min-w-[120px] rounded-lg">
          <Option value="all">Tất cả</Option>
          <Option value="done">Hoàn thành</Option>
          <Option value="pending">Chưa xong</Option>
        </Select>
      </div>

      <div className="flex flex-col">
        <span className="text-xs text-gray-500 mb-1">Ưu tiên</span>
        <Select defaultValue="all" className="min-w-[120px] rounded-lg">
          <Option value="all">Tất cả</Option>
          <Option value="HIGH">Cao</Option>
          <Option value="MEDIUM">Trung bình</Option>
          <Option value="LOW">Thấp</Option>
        </Select>
      </div>

      <div className="flex flex-col flex-1">
        <span className="text-xs text-gray-500 mb-1">&nbsp;</span>
        <Input placeholder="Tìm kiếm" className="rounded-lg" />
      </div>
    </div>
  );
};

export default FilterBar;
