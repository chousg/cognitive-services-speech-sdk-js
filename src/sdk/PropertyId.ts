// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

/**
 * Defines speech property ids.
 * @class PropertyId
 */
export enum PropertyId {

    /**
     * The Cognitive Services Speech Service subscription Key. If you are using an intent recognizer, you need to specify
     * to specify the LUIS endpoint key for your particular LUIS app. Under normal circumstances, you shouldn't
     * have to use this property directly.
     * Instead, use [[SpeechConfig.fromSubscription]].
     * @member PropertyId.SpeechServiceConnection_Key
     */
    SpeechServiceConnection_Key = 0,

    /**
     * The Cognitive Services Speech Service endpoint (url). Under normal circumstances, you shouldn't
     * have to use this property directly.
     * Instead, use [[SpeechConfig.fromEndpoint]].
     * NOTE: This endpoint is not the same as the endpoint used to obtain an access token.
     * @member PropertyId.SpeechServiceConnection_Endpoint
     */
    SpeechServiceConnection_Endpoint,

    /**
     * The Cognitive Services Speech Service region. Under normal circumstances, you shouldn't have to
     * use this property directly.
     * Instead, use [[SpeechConfig.fromSubscription]], [[SpeechConfig.fromEndpoint]], [[SpeechConfig.fromAuthorizationToken]].
     * @member PropertyId.SpeechServiceConnection_Region
     */
    SpeechServiceConnection_Region,

    /**
     * The Cognitive Services Speech Service authorization token (aka access token). Under normal circumstances,
     * you shouldn't have to use this property directly.
     * Instead, use [[SpeechConfig.fromAuthorizationToken]], [[SpeechRecognizer.authorizationToken]],
     * [[IntentRecognizer.authorizationToken]], [[TranslationRecognizer.authorizationToken]], [[SpeakerRecognizer.authorizationToken]].
     * @member PropertyId.SpeechServiceAuthorization_Token
     */
    SpeechServiceAuthorization_Token,

    /**
     * The Cognitive Services Speech Service authorization type. Currently unused.
     * @member PropertyId.SpeechServiceAuthorization_Type
     */
    SpeechServiceAuthorization_Type,

    /**
     * The Cognitive Services Speech Service endpoint id. Under normal circumstances, you shouldn't
     * have to use this property directly.
     * Instead, use [[SpeechConfig.endpointId]].
     * NOTE: The endpoint id is available in the Speech Portal, listed under Endpoint Details.
     * @member PropertyId.SpeechServiceConnection_EndpointId
     */
    SpeechServiceConnection_EndpointId,

    /**
     * The list of comma separated languages (BCP-47 format) used as target translation languages. Under normal circumstances,
     * you shouldn't have to use this property directly.
     * Instead use [[SpeechTranslationConfig.addTargetLanguage]],
     * [[SpeechTranslationConfig.targetLanguages]], [[TranslationRecognizer.targetLanguages]].
     * @member PropertyId.SpeechServiceConnection_TranslationToLanguages
     */
    SpeechServiceConnection_TranslationToLanguages,

    /**
     * The name of the Cognitive Service Text to Speech Service Voice. Under normal circumstances, you shouldn't have to use this
     * property directly.
     * Instead, use [[SpeechTranslationConfig.voiceName]].
     * NOTE: Valid voice names can be found <a href="https://aka.ms/csspeech/voicenames">here</a>.
     * @member PropertyId.SpeechServiceConnection_TranslationVoice
     */
    SpeechServiceConnection_TranslationVoice,

    /**
     * Translation features.
     * @member PropertyId.SpeechServiceConnection_TranslationFeatures
     */
    SpeechServiceConnection_TranslationFeatures,

    /**
     * The Language Understanding Service Region. Under normal circumstances, you shouldn't have to use this property directly.
     * Instead, use [[LanguageUnderstandingModel]].
     * @member PropertyId.SpeechServiceConnection_IntentRegion
     */
    SpeechServiceConnection_IntentRegion,

    /**
     * The host name of the proxy server used to connect to the Cognitive Services Speech Service. Only relevant in Node.js environments.
     * You shouldn't have to use this property directly.
     * Instead use <see cref="SpeechConfig.SetProxy(string,int,string,string)"/>.
     * Added in version 1.4.0.
     */
    SpeechServiceConnection_ProxyHostName,

    /**
     * The port of the proxy server used to connect to the Cognitive Services Speech Service. Only relevant in Node.js environments.
     * You shouldn't have to use this property directly.
     * Instead use <see cref="SpeechConfig.SetProxy(string,int,string,string)"/>.
     * Added in version 1.4.0.
     */
    SpeechServiceConnection_ProxyPort,

    /**
     * The user name of the proxy server used to connect to the Cognitive Services Speech Service. Only relevant in Node.js environments.
     * You shouldn't have to use this property directly.
     * Instead use <see cref="SpeechConfig.SetProxy(string,int,string,string)"/>.
     * Added in version 1.4.0.
     */
    SpeechServiceConnection_ProxyUserName,

    /**
     * The password of the proxy server used to connect to the Cognitive Services Speech Service. Only relevant in Node.js environments.
     * You shouldn't have to use this property directly.
     * Instead use <see cref="SpeechConfig.SetProxy(string,int,string,string)"/>.
     * Added in version 1.4.0.
     */
    SpeechServiceConnection_ProxyPassword,

    /**
     * The Cognitive Services Speech Service recognition Mode. Can be "INTERACTIVE", "CONVERSATION", "DICTATION".
     * This property is intended to be read-only. The SDK is using it internally.
     * @member PropertyId.SpeechServiceConnection_RecoMode
     */
    SpeechServiceConnection_RecoMode,

    /**
     * The spoken language to be recognized (in BCP-47 format). Under normal circumstances, you shouldn't have to use this property
     * directly.
     * Instead, use [[SpeechConfig.speechRecognitionLanguage]].
     * @member PropertyId.SpeechServiceConnection_RecoLanguage
     */
    SpeechServiceConnection_RecoLanguage,

    /**
     * The session id. This id is a universally unique identifier (aka UUID) representing a specific binding of an audio input stream
     * and the underlying speech recognition instance to which it is bound. Under normal circumstances, you shouldn't have to use this
     * property directly.
     * Instead use [[SessionEventArgs.sessionId]].
     * @member PropertyId.Speech_SessionId
     */
    Speech_SessionId,

    /**
     * The spoken language to be synthesized (e.g. en-US)
     * @member PropertyId.SpeechServiceConnection_SynthLanguage
     */
    SpeechServiceConnection_SynthLanguage,

    /**
     * The name of the TTS voice to be used for speech synthesis
     * @member PropertyId.SpeechServiceConnection_SynthVoice
     */
    SpeechServiceConnection_SynthVoice,

    /**
     * The string to specify TTS output audio format
     * @member PropertyId.SpeechServiceConnection_SynthOutputFormat
     */
    SpeechServiceConnection_SynthOutputFormat,

    /**
     * The list of comma separated languages used as possible source languages
     * Added in version 1.13.0
     * @member PropertyId.SpeechServiceConnection_AutoDetectSourceLanguages
     */
    SpeechServiceConnection_AutoDetectSourceLanguages,

    /**
     * The requested Cognitive Services Speech Service response output format (simple or detailed). Under normal circumstances, you shouldn't have
     * to use this property directly.
     * Instead use [[SpeechConfig.outputFormat]].
     * @member PropertyId.SpeechServiceResponse_RequestDetailedResultTrueFalse
     */
    SpeechServiceResponse_RequestDetailedResultTrueFalse,

    /**
     * The requested Cognitive Services Speech Service response output profanity level. Currently unused.
     * @member PropertyId.SpeechServiceResponse_RequestProfanityFilterTrueFalse
     */
    SpeechServiceResponse_RequestProfanityFilterTrueFalse,

    /**
     * The Cognitive Services Speech Service response output (in JSON format). This property is available on recognition result objects only.
     * @member PropertyId.SpeechServiceResponse_JsonResult
     */
    SpeechServiceResponse_JsonResult,

    /**
     * The Cognitive Services Speech Service error details (in JSON format). Under normal circumstances, you shouldn't have to
     * use this property directly. Instead use [[CancellationDetails.errorDetails]].
     * @member PropertyId.SpeechServiceResponse_JsonErrorDetails
     */
    SpeechServiceResponse_JsonErrorDetails,

    /**
     * The cancellation reason. Currently unused.
     * @member PropertyId.CancellationDetails_Reason
     */
    CancellationDetails_Reason,

    /**
     * The cancellation text. Currently unused.
     * @member PropertyId.CancellationDetails_ReasonText
     */
    CancellationDetails_ReasonText,

    /**
     * The Cancellation detailed text. Currently unused.
     * @member PropertyId.CancellationDetails_ReasonDetailedText
     */
    CancellationDetails_ReasonDetailedText,

    /**
     * The Language Understanding Service response output (in JSON format). Available via [[IntentRecognitionResult]]
     * @member PropertyId.LanguageUnderstandingServiceResponse_JsonResult
     */
    LanguageUnderstandingServiceResponse_JsonResult,

    /**
     * The URL string built from speech configuration.
     * This property is intended to be read-only. The SDK is using it internally.
     * NOTE: Added in version 1.7.0.
     */
    SpeechServiceConnection_Url,

    /**
     * The initial silence timeout value (in milliseconds) used by the service.
     * Added in version 1.7.0
     */
    SpeechServiceConnection_InitialSilenceTimeoutMs,

    /**
     * The end silence timeout value (in milliseconds) used by the service.
     * Added in version 1.7.0
     */
    SpeechServiceConnection_EndSilenceTimeoutMs,

    /**
     * A boolean value specifying whether audio logging is enabled in the service or not.
     * Added in version 1.7.0
     */
    SpeechServiceConnection_EnableAudioLogging,

    /**
     * The requested Cognitive Services Speech Service response output profanity setting.
     * Allowed values are "masked", "removed", and "raw".
     * Added in version 1.7.0.
     */
    SpeechServiceResponse_ProfanityOption,

    /**
     * A string value specifying which post processing option should be used by service.
     * Allowed values are "TrueText".
     * Added in version 1.7.0
     */
    SpeechServiceResponse_PostProcessingOption,

    /**
     *  A boolean value specifying whether to include word-level timestamps in the response result.
     * Added in version 1.7.0
     */
    SpeechServiceResponse_RequestWordLevelTimestamps,

    /**
     * The number of times a word has to be in partial results to be returned.
     * Added in version 1.7.0
     */
    SpeechServiceResponse_StablePartialResultThreshold,

    /**
     * A string value specifying the output format option in the response result. Internal use only.
     * Added in version 1.7.0.
     */
    SpeechServiceResponse_OutputFormatOption,

    /**
     * A boolean value to request for stabilizing translation partial results by omitting words in the end.
     * Added in version 1.7.0.
     */
    SpeechServiceResponse_TranslationRequestStablePartialResult,

    /**
     * Identifier used to connect to the backend service.
     * @member PropertyId.Conversation_ApplicationId
     */
    Conversation_ApplicationId,

    /**
     * Type of dialog backend to connect to.
     * @member PropertyId.Conversation_DialogType
     */
    Conversation_DialogType,

    /**
     * Silence timeout for listening
     * @member PropertyId.Conversation_Initial_Silence_Timeout
     */
    Conversation_Initial_Silence_Timeout,

    /**
     * From Id to add to speech recognition activities.
     * @member PropertyId.Conversation_From_Id
     */
    Conversation_From_Id,

    /**
     * ConversationId for the session.
     * @member PropertyId.Conversation_Conversation_Id
     */
    Conversation_Conversation_Id,

    /**
     * Comma separated list of custom voice deployment ids.
     * @member PropertyId.Conversation_Custom_Voice_Deployment_Ids
     */
    Conversation_Custom_Voice_Deployment_Ids,

    /**
     * Speech activity template, stamp properties from the template on the activity generated by the service for speech.
     * @member PropertyId.Conversation_Speech_Activity_Template
     * Added in version 1.10.0.
     */
    Conversation_Speech_Activity_Template,

    /**
     * The Cognitive Services Speech Service host (url). Under normal circumstances, you shouldn't have to use this property directly.
     * Instead, use [[SpeechConfig.fromHost]].
     */
    SpeechServiceConnection_Host,

    /**
     * Set the host for service calls to the Conversation Translator REST management and websocket calls.
     */
    ConversationTranslator_Host,

    /**
     * Optionally set the the host's display name.
     * Used when joining a conversation.
     */
    ConversationTranslator_Name,

    /**
     * Optionally set a value for the X-CorrelationId request header.
     * Used for troubleshooting errors in the server logs. It should be a valid guid.
     */
    ConversationTranslator_CorrelationId,

    /**
     * Set the conversation token to be sent to the speech service. This enables the
     * service to service call from the speech service to the Conversation Translator service for relaying
     * recognitions. For internal use.
     */
    ConversationTranslator_Token
}
