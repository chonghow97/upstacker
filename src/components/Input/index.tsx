import {TextInput, View} from 'react-native';
import type {TextInputProps} from 'react-native';
import React from 'react';
import Repo from 'asset/svg/search.svg';
import {useIconColor} from 'theme';

const Input = ({className, ...restProps}: TextInputProps) => {
  const iconColor = useIconColor();
  const combinedClassName =
    `flex-row items-center px-1.5 bg-gray-300 rounded dark:bg-transparent dark:border-white dark:border ${className || ''}`.trim();

  // 定义 SVG 和 placeholder 的色值类（由 NativeWind 处理）
  // 提示：NativeWind v4 推荐对 SVG 使用 className 配合 fill-current，或者直接传递 color 属性
  return (
    <View className={combinedClassName}>
      <Repo style={{marginRight: 4}} width={16} height={16} color={iconColor} />
      <TextInput
        className="dark:text-white px-1.5 py-3 flex-1"
        autoCorrect={false}
        returnKeyType="search"
        spellCheck={false}
        autoCapitalize="none"
        placeholderTextColor="#8e8e93" // 建议通过具体的规范色值控制
        {...restProps}
      />
    </View>
  );
};

export default Input;
