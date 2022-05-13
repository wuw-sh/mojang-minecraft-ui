import type { MessageFormResponse } from '../types';
import {Player} from 'mojang-minecraft'
export declare class MessageFormData {
    title(titleText: string): MessageFormData
    body(bodyText: string): MessageFormData
    button1(text: string): MessageFormData
    button2(text: string): MessageFormData
    show(player: Player): Promise<MessageFormResponse>
}
