'use client';

import type {
  SerializedAutoLinkNode,
  SerializedBlockNode,
  SerializedHeadingNode,
  SerializedHorizontalRuleNode,
  SerializedLinkNode,
  SerializedListItemNode,
  SerializedListNode,
  SerializedParagraphNode,
  SerializedQuoteNode,
  SerializedRelationshipNode,
  SerializedTextNode,
  SerializedUploadNode,
  TypedEditorState
} from '@payloadcms/richtext-lexical';
import { RichText } from '@payloadcms/richtext-lexical/react';

export type DescriptionType = TypedEditorState<
  | SerializedAutoLinkNode
  | SerializedBlockNode
  | SerializedHorizontalRuleNode
  | SerializedLinkNode
  | SerializedListItemNode
  | SerializedListNode
  | SerializedParagraphNode
  | SerializedQuoteNode
  | SerializedRelationshipNode
  | SerializedTextNode
  | SerializedUploadNode
  | SerializedHeadingNode
>;

export type RichTextProps = {
  lexicalData: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
};

export const RichTextComponent = ({ lexicalData }: RichTextProps) => {
  return <RichText data={lexicalData!} />;
};
